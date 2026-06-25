/**
 * Minimal AWS Signature V4 signer for SES SendEmail.
 * Zero dependencies. Works in Cloudflare Workers, Node, Deno, browsers.
 *
 * Usage:
 *   const signed = await signRequest({
 *     region: "us-east-1",
 *     accessKeyId: "...",
 *     secretAccessKey: "...",
 *     service: "ses",
 *     method: "POST",
 *     url: "https://email.us-east-1.amazonaws.com/v2/email/outbound-emails",
 *     headers: { "content-type": "application/json" },
 *     body: JSON.stringify({ ... })
 *   });
 *   const res = await fetch(signed.url, signed);
 */

const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function toAmzDate(d) {
  return d.toISOString().replace(/[:-]|\.\d{3}/g, "");
}

function toHttpDate(d) {
  return `${DAYS[d.getUTCDay()]}, ${String(d.getUTCDate()).padStart(2,"0")} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()} ${String(d.getUTCHours()).padStart(2,"0")}:${String(d.getUTCMinutes()).padStart(2,"0")}:${String(d.getUTCSeconds()).padStart(2,"0")} GMT`;
}

async function sha256Hex(message) {
  const data = typeof message === "string" ? new TextEncoder().encode(message) : message;
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2,"0")).join("");
}

async function hmac(key, data) {
  const k = typeof key === "string" ? new TextEncoder().encode(key) : key;
  const d = typeof data === "string" ? new TextEncoder().encode(data) : data;
  const cryptoKey = await crypto.subtle.importKey("raw", k, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, d);
  return new Uint8Array(sig);
}

async function getSigningKey(secretAccessKey, dateStamp, region, service) {
  const kDate = await hmac("AWS4" + secretAccessKey, dateStamp);
  const kRegion = await hmac(kDate, region);
  const kService = await hmac(kRegion, service);
  const kSigning = await hmac(kService, "aws4_request");
  return kSigning;
}

/**
 * @param {Object} opts
 * @returns {Promise<{url:string, method:string, headers:Record<string,string>, body:string}>}
 */
export async function signRequest(opts) {
  const {
    accessKeyId,
    secretAccessKey,
    region,
    service,
    method,
    url,
    headers: extraHeaders = {},
    body = ""
  } = opts;

  const now = new Date();
  const amzDate = toAmzDate(now);
  const dateStamp = amzDate.slice(0, 8);
  const httpDate = toHttpDate(now);

  const parsedUrl = new URL(url);
  const host = parsedUrl.host;
  const path = parsedUrl.pathname + parsedUrl.search;
  const payloadHash = await sha256Hex(body);

  // Build canonical headers
  const allHeaders = {
    "host": host,
    "x-amz-date": amzDate,
    ...Object.fromEntries(
      Object.entries(extraHeaders).map(([k,v]) => [k.toLowerCase().trim(), v])
    )
  };
  const signedHeaders = Object.keys(allHeaders).sort().join(";");
  const canonicalHeaders = Object.keys(allHeaders).sort()
    .map(k => `${k}:${allHeaders[k]}`)
    .join("\n");

  const canonicalRequest = [
    method,
    path,
    "", // query string (empty for SES v2)
    canonicalHeaders + "\n",
    signedHeaders,
    payloadHash
  ].join("\n");

  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    await sha256Hex(canonicalRequest)
  ].join("\n");

  const signingKey = await getSigningKey(secretAccessKey, dateStamp, region, service);
  const signature = Array.from(new Uint8Array(await hmac(signingKey, stringToSign)))
    .map(b => b.toString(16).padStart(2, "0")).join("");

  const authorization = `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  return {
    method,
    url,
    headers: {
      ...extraHeaders,
      "host": host,
      "x-amz-date": amzDate,
      "authorization": authorization,
    },
    body
  };
}
