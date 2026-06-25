/**
 * Contact Form Email Template
 * Clean, simple layout — grey field backgrounds, dark answers.
 *
 * Data: { firstName, lastName, email, phone, message, siteName?, siteUrl? }
 */

export function buildContactEmail(data) {
  const siteName = data.siteName || "Bay Aire RV Park";
  const fullName = `${data.firstName} ${data.lastName}`;
  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "long",
    timeStyle: "short"
  });

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<title>New Inquiry — ${siteName}</title>
<style type="text/css">
table { border-collapse: separate; table-layout: fixed; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
table td { border-collapse: collapse; }
.ExternalClass { width: 100%; }
.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
body, a, li, p, h1, h2, h3 { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
html { -webkit-text-size-adjust: none !important; }
body { min-width: 100%; Margin: 0px; padding: 0px; }
img { Margin: 0; padding: 0; -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
a { text-decoration: none; }
a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
u + #body a { color: inherit; text-decoration: none; font-size: inherit; font-family: inherit; font-weight: inherit; line-height: inherit; }
a[href^="mailto"], a[href^="tel"], a[href^="sms"] { color: inherit; text-decoration: none; }
@media (max-width: 480px) { .pad { padding: 20px 16px !important; } }
</style>
</head>
<body style="margin:0;padding:0;min-width:100%;background-color:#E3E3E3;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="background-color:#E3E3E3;">
<tr>
  <td align="center" style="padding:30px 10px;">

    <!-- container -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;">

      <!-- header -->
      <tr>
        <td style="background-color:#2DA4A9;padding:24px 32px;text-align:center;">
          <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">
            ${siteName}
          </p>
        </td>
      </tr>

      <!-- body -->
      <tr>
        <td style="background-color:#F2F4F7;padding:32px;border-left:1px solid #E0E0E0;border-right:1px solid #E0E0E0;" class="pad">

          <p style="margin:0 0 6px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:18px;font-weight:700;line-height:26px;color:#2E2E2E;">
            New Form Submission
          </p>
          <p style="margin:0 0 24px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:12px;line-height:18px;color:#999999;">
            ${now} (ET)
          </p>

          <!-- fields -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
            ${row("Name",    fullName)}
            ${row("Email",   `<a href="mailto:${data.email}" style="color:#2DA4A9;">${data.email}</a>`)}
            ${data.phone ? row("Phone", `<a href="tel:${data.phone}" style="color:#2E2E2E;text-decoration:none;">${data.phone}</a>`) : ""}
            ${row("Message", escapeHtml(data.message).replace(/\n/g, '<br />'))}
          </table>

        </td>
      </tr>

    </table>

  </td>
</tr>
</table>
</body>
</html>`;
}

function row(label, value) {
  return `<tr>
<td style="padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-bottom:12px;">
    <tr>
      <td style="padding:8px 14px;background-color:#E8EAED;font-size:11px;font-weight:700;color:#777777;text-transform:uppercase;letter-spacing:0.5px;width:1%;white-space:nowrap;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:8px 14px;background-color:#FFFFFF;font-size:14px;line-height:20px;color:#2E2E2E;vertical-align:top;">
        ${value || "&mdash;"}
      </td>
    </tr>
  </table>
</td>
</tr>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
