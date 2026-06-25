/**
 * Contact Form Email Template
 * Clean, responsive layout. Scales at all breakpoints.
 *
 * Data: { firstName, lastName, email, phone, message, siteName? }
 */

export function buildContactEmail(data) {
  const fullName = `${data.firstName} ${data.lastName}`;
  const siteName = data.siteName || "Bay Aire RV Park";
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
    <title>New Form Response – ${escapeHtml(siteName)}</title>
    <style>
        /* ── Responsive media queries ── */
        @media only screen and (max-width: 480px) {
            .email-inner   { width: 100% !important; }
            .email-padding { padding: 30px 20px !important; }
            .email-logo    { margin-bottom: 28px !important; }
            .email-btn-td  { padding: 16px 0 !important; }
        }
        @media only screen and (max-width: 375px) {
            .email-padding { padding: 24px 16px !important; }
            body, p, a, span { font-size: inherit !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #E3E3E3; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">

    <!--[if mso]><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"><![endif]-->

    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="background-color: #E3E3E3; padding: 40px 20px; min-height: 100vh;">
        <tr>
            <td align="center" valign="top">

                <!-- Main card: fluid width, capped at 600px -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" class="email-inner" style="max-width: 600px; background-color: #FEFDFA; border-top: 4px solid #2da4a9; margin: 0 auto; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <tr>
                        <td class="email-padding" style="padding: 50px 50px 50px 50px;">

                            <img src="https://assets.buckysolutions.com/bucky%2Blogo.png" alt="bucky" width="110" class="email-logo" style="display: block; max-width: 110px; width: 100%; height: auto; margin-bottom: 40px; border: 0;">

                            <p style="color: #888888; font-size: 16px; line-height: 24px; margin: 0 0 30px 0;">
                                A new form response has been submitted. Review the details below:
                            </p>

                            <p style="font-size: 16px; line-height: 24px; margin: 0 0 15px 0;">
                                <span style="color: #888888;">Name:</span> <span style="color: #000000;">${escapeHtml(fullName)}</span>
                            </p>
                            <p style="font-size: 16px; line-height: 24px; margin: 0 0 15px 0;">
                                <span style="color: #888888;">Email:</span> <span style="color: #000000;">${escapeHtml(data.email)}</span>
                            </p>
                            ${data.phone ? `<p style="font-size: 16px; line-height: 24px; margin: 0 0 15px 0;">
                                <span style="color: #888888;">Phone:</span> <span style="color: #000000;">${escapeHtml(data.phone)}</span>
                            </p>` : ''}
                            <p style="font-size: 16px; line-height: 24px; margin: 0 0 40px 0;">
                                <span style="color: #888888;">Message:</span> <span style="color: #000000;">${escapeHtml(data.message)}</span>
                            </p>

                            <!-- Button: full-width, bulletproof -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                <tr>
                                    <td align="center" class="email-btn-td" style="background-color: #2da4a9;">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="mailto:${escapeHtml(data.email)}" style="height:54px;v-text-anchor:middle;width:100%;" fillcolor="#2da4a9"><w:anchorlock/><center><![endif]-->
                                        <a href="mailto:${escapeHtml(data.email)}" style="display: block; width: 100%; padding: 18px 0; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                            Reply to email
                                        </a>
                                        <!--[if mso]></center></v:roundrect><![endif]-->
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                </table>

                <!-- Footer -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" class="email-inner" style="max-width: 600px; margin: 0 auto;">
                    <tr>
                        <td align="center" style="padding: 25px 0; color: #999999; font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                            &copy; ${year} Bucky Solutions LLC &middot; All Rights Reserved
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

    <!--[if mso]></td></tr></table><![endif]-->

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
