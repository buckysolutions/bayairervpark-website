/**
 * Bay Aire RV Park — Contact Form Email Template
 * Reusable across all Bucky Solutions client sites.
 *
 * @param {Object} data - Form submission data
 * @param {string} data.firstName
 * @param {string} data.lastName
 * @param {string} data.email
 * @param {string} data.phone
 * @param {string} data.message
 * @param {string} [data.siteName]  - "Bay Aire RV Park" by default
 * @param {string} [data.siteUrl]   - "https://bayairervpark.com" by default
 * @returns {string} Full HTML email document
 */
export function buildContactEmail(data) {
  const siteName = data.siteName || "Bay Aire RV Park";
  const siteUrl  = data.siteUrl  || "https://bayairervpark.com";
  const now = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]><!---->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table { border-collapse: separate; table-layout: fixed; mso-table-lspace: 0pt; mso-table-rspace: 0pt }
table td { border-collapse: collapse }
.ExternalClass { width: 100% }
.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100% }
body, a, li, p, h1, h2, h3 { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100% }
html { -webkit-text-size-adjust: none !important }
body { min-width: 100%; Margin: 0px; padding: 0px; background-color: #E0E0E0 }
body, #innerTable { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale }
#innerTable img+div { display: none; display: none !important }
img { Margin: 0; padding: 0; -ms-interpolation-mode: bicubic }
h1, h2, h3, p, a { overflow-wrap: normal; white-space: normal; word-break: break-word }
a { text-decoration: none }
h1, h2, h3, p { min-width: 100%!important; width: 100%!important; max-width: 100%!important; display: inline-block!important; border: 0; padding: 0; margin: 0 }
</style>
<style type="text/css">
@media (max-width: 480px) {
  .hm { display: none!important }
  .t44 { padding: 0 0 22px!important }
  .t28, .t40, .t58, .t9 { text-align: left!important }
  .t27, .t39, .t57, .t8 { vertical-align: top!important; width: 600px!important }
  .t6 { padding: 20px 30px!important }
  .t25 { padding: 30px!important }
  .t67 { mso-line-height-alt: 20px!important; line-height: 20px!important }
  .t3 { width: 44px!important }
}
</style>
<!--[if !mso]><!---->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500&display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t70" style="min-width:100%;Margin:0px;padding:0px;background-color:#E0E0E0;">
<div class="t69" style="background-color:#E0E0E0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center">
<tr><td class="t68" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#E0E0E0;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#E0E0E0"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable">
<tr><td class="t48" align="center">
<table class="t47" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr><td width="566" class="t46" style="width:566px;">
<table class="t45" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
<tr><td class="t44" style="padding:50px 10px 31px 10px;">
<div class="t43" style="width:100%;text-align:left;">
<div class="t42" style="display:inline-block;">
<table class="t41" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t40"><td></td><td class="t39" width="546" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t38" style="width:100%;">
<tr><td class="t37" style="background-color:transparent;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">
<tr><td class="t17" align="center">
<table class="t16" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr><td width="546" class="t15" style="width:600px;">
<table class="t14" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
<tr><td class="t13">
<div class="t12" style="width:100%;text-align:left;">
<div class="t11" style="display:inline-block;">
<table class="t10" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t9"><td></td><td class="t8" width="546" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t7" style="width:100%;">
<tr><td class="t6" style="background-color:#052A30;padding:49px 50px 42px 50px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">
<tr><td class="t5" align="left">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;">
<tr><td width="107" class="t3" style="width:107px;">
<img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="107" height="26" alt="Bucky Solutions" src="https://assets.buckysolutions.com/bucky%2Blogo%2Balternate.svg" />
</td></tr></table>
</td></tr></table>
</td></tr></table>
</td><td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table>
</td></tr>

<tr><td class="t36" align="center">
<table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr><td width="546" class="t34" style="width:600px;">
<table class="t33" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
<tr><td class="t32">
<div class="t31" style="width:100%;text-align:left;">
<div class="t30" style="display:inline-block;">
<table class="t29" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t28"><td></td><td class="t27" width="546" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t26" style="width:100%;">
<tr><td class="t25" style="background-color:#FEFDFA;padding:40px 50px 40px 50px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">

<!-- Heading -->
<tr><td class="t23" align="center">
<h1 style="margin:0 0 10px;Margin:0 0 10px;font-family:Arial,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:41px;font-weight:800;font-size:32px;letter-spacing:-1.56px;color:#052A30;text-align:left;">You've received a new form submission.</h1>
</td></tr>

<tr><td style="padding:0 0 8px;">
<p style="margin:0;font-family:Arial,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;font-size:13px;color:#888888;">Submitted ${now} (ET) &bull; ${siteName}</p>
</td></tr>

<!-- Divider -->
<tr><td style="padding:12px 0 18px;">
<div style="border-top:1px solid #e0e0e0;"></div>
</td></tr>

<!-- Form Data -->
<tr><td>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;font-family:Arial,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;font-size:14px;color:#333333;line-height:22px;">
${fieldRow("First Name", data.firstName)}
${fieldRow("Last Name",  data.lastName)}
${fieldRow("Email",      `<a href="mailto:${data.email}" style="color:#052A30;">${data.email}</a>`)}
${fieldRow("Phone",      `<a href="tel:${data.phone}" style="color:#052A30;">${data.phone}</a>`)}
<tr><td colspan="2" style="padding-top:12px;">
<p style="margin:0 0 4px;font-weight:700;color:#052A30;">Message</p>
<p style="margin:0;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
</td></tr>
</table>
</td></tr>

<!-- CTA -->
<tr><td style="padding-top:24px;">
<table role="presentation" cellpadding="0" cellspacing="0">
<tr>
  <td style="padding-right:12px;">
    <a href="mailto:${data.email}" style="display:inline-block;padding:10px 22px;background-color:#052A30;color:#ffffff;font-family:Arial,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;font-size:13px;font-weight:700;text-decoration:none;border-radius:0;">Reply</a>
  </td>
  <td>
    <a href="${siteUrl}" style="display:inline-block;padding:10px 22px;background-color:#FEFDFA;color:#052A30;border:1px solid #052A30;font-family:Arial,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;font-size:13px;font-weight:700;text-decoration:none;border-radius:0;">Visit ${siteName}</a>
  </td>
</tr>
</table>
</td></tr>

</table>
</td></tr></table>
</td><td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr>
</table></td></tr></table>
</td><td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr>

<!-- Footer -->
<tr><td class="t66" align="center">
<table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr><td width="600" class="t64" style="width:600px;">
<table class="t63" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
<tr><td class="t62">
<div class="t61" style="width:100%;text-align:left;">
<div class="t60" style="display:inline-block;">
<table class="t59" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t58"><td></td><td class="t57" width="600" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t56" style="width:100%;">
<tr><td class="t55" style="padding:0 50px 0 50px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">
<tr><td class="t54" align="center">
<p style="margin:0;font-family:'Albert Sans',BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-size:12px;color:#888888;text-align:center;">&copy; 2026 Bucky Solutions LLC. All Rights Reserved</p>
</td></tr></table>
</td></tr></table>
</td><td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr>

<tr><td><div style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;">&nbsp;&nbsp;</div></td></tr>
</table></td></tr></table>
</td></tr></table>
</div>
<div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
</body>
</html>`;
}

/** Render a label / value table row */
function fieldRow(label, value) {
  return `<tr>
<td style="padding:6px 12px 6px 0;vertical-align:top;font-weight:700;color:#052A30;white-space:nowrap;width:1%;">${label}</td>
<td style="padding:6px 0;vertical-align:top;">${value}</td>
</tr>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
