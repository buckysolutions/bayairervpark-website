/**
 * Bucky Solutions — Contact Form Email Template
 * Built for maximum email client compatibility.
 *
 * Data shape:
 *   { firstName, lastName, email, phone, message, siteName?, siteUrl? }
 */

export function buildContactEmail(data) {
  const siteName = data.siteName || "Bay Aire RV Park";
  const siteUrl  = data.siteUrl  || "https://bayairervpark.com";
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
table {
  border-collapse: separate;
  table-layout: fixed;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
}
table td {
  border-collapse: collapse;
}
.ExternalClass {
  width: 100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
  line-height: 100%;
}
body, a, li, p, h1, h2, h3 {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
html {
  -webkit-text-size-adjust: none !important;
}
body {
  min-width: 100%;
  Margin: 0px;
  padding: 0px;
}
body, #innerTable {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#innerTable img + div {
  display: none;
  display: none !important;
}
img {
  Margin: 0;
  padding: 0;
  -ms-interpolation-mode: bicubic;
}
h1, h2, h3, p, a {
  overflow-wrap: normal;
  white-space: normal;
  word-break: break-word;
}
a {
  text-decoration: none;
}
h1, h2, h3, p {
  min-width: 100% !important;
  width: 100% !important;
  max-width: 100% !important;
  display: inline-block !important;
  border: 0;
  padding: 0;
  margin: 0;
}
a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
}
u + #body a {
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
  color: inherit;
  text-decoration: none;
}
</style>
<style type="text/css">
@media (max-width: 480px) {
  .hm { display: none !important; }
  .t40 { padding-left: 30px !important; padding-right: 30px !important; }
}
</style>
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&amp;display=swap" rel="stylesheet" type="text/css" />
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
<body id="body" class="t94" style="min-width:100%;Margin:0px;padding:0px;background-color:#E3E3E3;">
<div class="t93" style="background-color:#E3E3E3;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center">
<tr>
  <td class="t92" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#E3E3E3;" valign="top" align="center">
    <!--[if mso]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
    <v:fill color="#E3E3E3"/>
    </v:background>
    <![endif]-->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable">
    <tr>
      <td class="t44" align="center">

        <table class="t43" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
        <tr>
          <td width="600" class="t42" style="width:600px;">

            <!-- ═══════ MAIN CARD ═══════ -->
            <table class="t41" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
            <tr>
              <td class="t40" style="border-top:4px solid #2DA4A9;background-color:#F2F4F7;padding:35px 50px 35px 50px;">

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">

                  <!-- Bucky Logo -->
                  <tr>
                    <td class="t5" align="left">
                      <img src="https://assets.buckysolutions.com/bucky%2Blogo.svg"
                           alt="Bucky Solutions"
                           width="120" height="30"
                           style="display:block;border:0;height:auto;width:120px;Margin:0;max-width:100%;" />
                    </td>
                  </tr>

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:64px;line-height:64px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Greeting -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:22px;font-weight:400;font-size:16px;color:#888888;text-align:left;">
                        Hello —
                      </p>
                    </td>
                  </tr>

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Intro -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:22px;font-weight:400;font-size:16px;color:#888888;text-align:left;">
                        A new contact form submission was received from <strong style="color:#333333;">${siteName}</strong> on ${now} (ET).
                      </p>
                    </td>
                  </tr>

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Submission Details Heading -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:22px;font-weight:700;font-size:16px;color:#333333;text-align:left;">
                        Submission Details
                      </p>
                    </td>
                  </tr>

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:18px;line-height:18px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Name -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:22px;font-weight:400;font-size:16px;color:#888888;text-align:left;">
                        <strong style="color:#333333;">Name:</strong> ${escapeHtml(fullName)}
                      </p>
                    </td>
                  </tr>

                  <!-- Email -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:22px;font-weight:400;font-size:16px;color:#888888;text-align:left;">
                        <strong style="color:#333333;">Email:</strong> <a href="mailto:${data.email}" style="color:#2DA4A9;">${data.email}</a>
                      </p>
                    </td>
                  </tr>

                  <!-- Phone -->
                  ${data.phone ? `<tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:22px;font-weight:400;font-size:16px;color:#888888;text-align:left;">
                        <strong style="color:#333333;">Phone:</strong> <a href="tel:${data.phone}" style="color:#333333;text-decoration:none;">${data.phone}</a>
                      </p>
                    </td>
                  </tr>` : ''}

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Message -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:22px;font-weight:700;font-size:16px;color:#333333;text-align:left;">
                        Message
                      </p>
                    </td>
                  </tr>

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:12px;line-height:12px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Message content -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:24px;font-weight:400;font-size:16px;color:#555555;text-align:left;">
                        ${escapeHtml(data.message).replace(/\n/g, '<br />')}
                      </p>
                    </td>
                  </tr>

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Reply CTA -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:22px;font-weight:400;font-size:16px;color:#888888;text-align:left;">
                        <a href="mailto:${data.email}" style="color:#2DA4A9;text-decoration:underline;">Reply to ${escapeHtml(data.firstName)}</a>
                      </p>
                    </td>
                  </tr>

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Signature -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:22px;font-weight:400;font-size:16px;color:#888888;text-align:left;">
                        Sincerely,
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:22px;font-weight:700;font-size:16px;color:#333333;text-align:left;">
                        The Bucky Solutions Team
                      </p>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
            </table>
            <!-- ═══════ / MAIN CARD ═══════ -->

          </td>
        </tr>
        </table>

        <!-- ═══════ FOOTER ═══════ -->
        <table class="t90" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
        <tr>
          <td width="600" class="t89" style="width:600px;">
            <table class="t88" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
            <tr>
              <td class="t87" style="background-color:#EDEFF2;padding:40px 50px 100px 50px;">

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">

                  <!-- Bucky Icon -->
                  <tr>
                    <td class="t50" align="left">
                      <img src="https://b2k.company/bucky%2Bicon%2B.png"
                           alt="Bucky Solutions"
                           width="30" height="29"
                           style="display:block;border:0;height:auto;width:30px;Margin:0;max-width:100%;" />
                    </td>
                  </tr>

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:60px;line-height:60px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Footer Links -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:32px;font-weight:400;font-size:16px;color:#959595;text-align:left;">
                        <a href="https://buckysolutions.com" style="color:#959595;text-decoration:underline;" target="_blank">Website</a>
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:32px;font-weight:400;font-size:16px;color:#959595;text-align:left;">
                        <a href="mailto:hello@buckysolutions.com" style="color:#959595;text-decoration:underline;" target="_blank">Contact</a>
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:32px;font-weight:400;font-size:16px;color:#959595;text-align:left;">
                        <a href="https://buckysolutions.com" style="color:#959595;text-decoration:underline;" target="_blank">Learn More</a>
                      </p>
                    </td>
                  </tr>

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Mission Statement -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:Roboto,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif;line-height:18px;font-weight:400;font-size:11px;color:#959595;text-align:left;">
                        Empowering independent RV parks to compete with corporate chains by delivering enterprise-level automation at independent-park pricing.
                      </p>
                    </td>
                  </tr>

                  <!-- Spacer -->
                  <tr><td style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;">&nbsp;</td></tr>

                  <!-- Registered Address -->
                  <tr>
                    <td align="left">
                      <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:18px;font-weight:400;font-size:11px;color:#959595;text-align:left;">
                        Registered location: Bucky Solutions LLC., 7901 4th St N STE 300, St. Petersburg, FL 33702
                      </p>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
            </table>
          </td>
        </tr>
        </table>
        <!-- ═══════ / FOOTER ═══════ -->

      </td>
    </tr>
    </table>
  </td>
</tr>
</table>
</div>
<!--[if !mso]><!---->
<div itemscope itemtype="http://schema.org/EmailMessage">
  <meta itemprop="subjectLine" content="New Inquiry — ${siteName}" />
</div>
<!--<![endif]-->
<div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
</body>
</html>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
