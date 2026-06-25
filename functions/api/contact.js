/**
 * Cloudflare Pages Function — Contact Form Handler
 * POST /api/contact  →  validates fields → sends email via SES → returns JSON
 */

import { sendEmail } from "../lib/ses.js";
import { buildContactEmail } from "../lib/email-template.js";

export async function onRequest(context) {
  // CORS preflight
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders()
    });
  }

  if (context.request.method !== "POST") {
    // Redirect browser visits to the contact page
    return Response.redirect("/contact/", 302);
  }

  try {
    // Parse the form body
    const contentType = context.request.headers.get("content-type") || "";
    let data;
    if (contentType.includes("application/json")) {
      data = await context.request.json();
    } else {
      const form = await context.request.formData();
      data = {
        firstName: form.get("first_name") || form.get("firstName") || "",
        lastName:  form.get("last_name")  || form.get("lastName")  || "",
        email:     form.get("email")      || "",
        phone:     form.get("phone")      || "",
        message:   form.get("message")    || ""
      };
    }

    // Validate
    if (!data.email || !data.firstName || !data.message) {
      return json({ ok: false, error: "Missing required fields: first_name, email, message" }, 422);
    }

    // Build & send
    const html = buildContactEmail(data);
    const toEmail = context.env.SES_TO_EMAIL || context.env.SES_FROM_EMAIL;

    await sendEmail({
      to:      toEmail,
      subject: `New Inquiry from ${data.firstName} ${data.lastName} — ${data.email}`,
      html
    }, context.env);

    return json({ ok: true });
  } catch (err) {
    console.error("contact handler error:", err);
    return json({ ok: false, error: err.message || "Internal error" }, 500);
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(), "content-type": "application/json; charset=utf-8" }
  });
}

function corsHeaders() {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type"
  };
}
