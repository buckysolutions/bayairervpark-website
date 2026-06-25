/**
 * Thin AWS SES v2 client using raw HTTP + SigV4.
 * Zero dependencies.
 *
 * Configure these env vars in Cloudflare Pages dashboard:
 *   AWS_ACCESS_KEY_ID
 *   AWS_SECRET_ACCESS_KEY
 *   AWS_REGION          (e.g. "us-east-1")
 *   SES_FROM_EMAIL      (verified SES sender — "hello@bayairervpark.com")
 *   SES_TO_EMAIL        (where form notifications go)
 */

import { signRequest } from "./sigv4.js";

/**
 * @param {Object} opts
 * @param {string} opts.to
 * @param {string} opts.subject
 * @param {string} opts.html
 * @param {Record<string,string>} env
 */
export async function sendEmail(opts, env) {
  const region    = read(env, "AWS_REGION");
  const fromEmail = read(env, "SES_FROM_EMAIL");

  const body = JSON.stringify({
    FromEmailAddress: fromEmail,
    Destination: { ToAddresses: [opts.to] },
    Content: {
      Simple: {
        Subject: { Data: opts.subject, Charset: "UTF-8" },
        Body: { Html: { Data: opts.html, Charset: "UTF-8" } }
      }
    }
  });

  const signed = await signRequest({
    accessKeyId:     read(env, "AWS_ACCESS_KEY_ID"),
    secretAccessKey: read(env, "AWS_SECRET_ACCESS_KEY"),
    region,
    service: "ses",
    method: "POST",
    url: `https://email.${region}.amazonaws.com/v2/email/outbound-emails`,
    headers: { "content-type": "application/json; charset=utf-8" },
    body
  });

  const res = await fetch(signed.url, {
    method:  signed.method,
    headers: signed.headers,
    body:    signed.body
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`SES returned ${res.status}: ${text}`);
  }

  return res;
}

function read(env, name) {
  const val = env?.[name];
  if (!val) throw new Error(`Missing required env var: ${name}`);
  return val;
}
