/**
 * Contact Form Email Template
 * Built for maximum email client compatibility.
 *
 * Data shape:
 *   { firstName, lastName, email, phone, message, siteName?, siteUrl? }
 */

export function buildContactEmail(data) {
  const siteName = data.siteName || "Bay Aire RV Park";
  const siteUrl  = data.siteUrl  || "https://bayairervpark.com";
  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "long",
    timeStyle: "short"
  });

  const c = {
    bg:        "#E8E8E8",
    headerBg:  "#1D5171",
    cardBg:    "#FFFFFF",
    text:      "#2E2E2E",
    mute:      "#757575",
    label:     "#1D5171",
    accent:    "#65CBDA",
    border:    "#E0E0E0",
    white:     "#FFFFFF",
  };

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<title>New Inquiry – ${siteName}</title>
<style type="text/css">
  body, table, td, p, a, li, blockquote {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  table, td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
  }
  img {
    -ms-interpolation-mode: bicubic;
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none;
  }
  body {
    width: 100% !important;
    min-width: 100%;
    margin: 0;
    padding: 0;
  }
  @media only screen and (max-width: 480px) {
    .col { width: 100% !important; max-width: 100% !important; }
    .pad { padding: 24px 20px !important; }
    .pad-inner { padding: 20px 16px !important; }
  }
</style>
<!--[if mso]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body style="margin:0;padding:0;min-width:100%;background-color:${c.bg};">

<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:${c.bg};">
<tr>
  <td align="center" style="padding:40px 10px;">

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" class="col" style="max-width:600px;width:100%;">

      <!-- top spacer -->
      <tr><td style="height:16px;font-size:1px;line-height:1px;">&nbsp;</td></tr>

      <!-- header -->
      <tr>
        <td style="background-color:${c.headerBg};padding:28px 32px;text-align:center;">
          <img src="https://assets.buckysolutions.com/clients/bayaire-rv-park/bayaire%2Blogo.png"
               alt="${siteName}"
               width="160" height="29"
               style="display:block;border:0;margin:0 auto;width:160px;height:auto;max-width:160px;" />
        </td>
      </tr>

      <!-- body card -->
      <tr>
        <td style="background-color:${c.cardBg};padding:36px 32px 32px 32px;border-left:1px solid ${c.border};border-right:1px solid ${c.border};" class="pad-inner">

          <p style="margin:0 0 8px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:20px;font-weight:700;line-height:28px;color:${c.label};">
            New Form Submission
          </p>
          <p style="margin:0 0 20px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;line-height:20px;color:${c.mute};">
            ${now} &middot; ${siteName}
          </p>

          <!-- divider -->
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr><td style="border-top:1px solid ${c.border};font-size:1px;line-height:1px;">&nbsp;</td></tr>
          </table>

          <!-- fields -->
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:20px;">
            ${field(c, "First Name", data.firstName)}
            ${field(c, "Last Name",  data.lastName)}
            ${field(c, "Email",      `<a href="mailto:${data.email}" style="color:${c.accent};">${data.email}</a>`)}
            ${field(c, "Phone",      data.phone
              ? `<a href="tel:${data.phone}" style="color:${c.text};text-decoration:none;">${data.phone}</a>`
              : "&mdash;")}
          </table>

          <!-- message -->
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:20px;">
            <tr>
              <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;color:${c.label};text-transform:uppercase;letter-spacing:0.5px;padding-bottom:8px;">
                Message
              </td>
            </tr>
            <tr>
              <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:24px;color:${c.text};padding:16px;background-color:#F7F7F7;border-left:3px solid ${c.accent};">
                ${escapeHtml(data.message).replace(/\n/g, '<br />')}
              </td>
            </tr>
          </table>

        </td>
      </tr>

      <!-- reply CTA -->
      <tr>
        <td style="background-color:#F4F4F4;padding:20px 32px;text-align:center;border-left:1px solid ${c.border};border-right:1px solid ${c.border};" class="pad-inner">
          <a href="mailto:${data.email}" style="display:inline-block;padding:8px 28px;background-color:${c.accent};color:${c.white};text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;font-weight:600;border-radius:3px;">Reply</a>
        </td>
      </tr>

      <!-- bottom shadow -->
      <tr>
        <td style="height:1px;font-size:1px;line-height:1px;background-color:${c.border};">&nbsp;</td>
      </tr>

      <!-- brand footer -->
      <tr>
        <td style="padding:24px 32px;text-align:center;">
          <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:11px;line-height:16px;color:#AAAAAA;">
            &copy; ${new Date().getFullYear()} Bucky Solutions LLC &middot; All Rights Reserved
          </p>
        </td>
      </tr>

      <!-- bottom spacer -->
      <tr><td style="height:24px;font-size:1px;line-height:1px;">&nbsp;</td></tr>

    </table>

  </td>
</tr>
</table>

</body>
</html>`;
}

function field(c, label, valueHtml) {
  return `<tr>
<td style="padding:10px 8px 10px 0;vertical-align:top;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;color:${c.label};text-transform:uppercase;letter-spacing:0.5px;white-space:nowrap;width:1%;">
  ${label}
</td>
<td style="padding:10px 0;vertical-align:top;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:22px;color:${c.text};">
  ${valueHtml || "&mdash;"}
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
