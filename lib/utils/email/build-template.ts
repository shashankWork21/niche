export function buildEmailTemplate({
  title,
  preheader,
  intro,
  buttonText,
  buttonUrl,
  footerNote,
}: {
  title: string;
  preheader: string;
  intro: string;
  buttonText: string;
  buttonUrl: string;
  footerNote: string;
}) {
  const brand = "Find your Niche by Smart Algorhythm";
  const text = `${brand}\n\n${title}\n\n${intro}\n\n${buttonText}: ${buttonUrl}\n\n${footerNote}\n`;

  const html = `<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body style="margin:0;padding:0;background:#eff6ff;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${preheader}
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#eff6ff;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border:1px solid #bfdbfe;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:20px 24px;background:linear-gradient(135deg,#eff6ff 0%,#dbeafe 100%);border-bottom:1px solid #bfdbfe;">
                <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;color:#172554;font-weight:800;font-size:18px;letter-spacing:-0.2px;">
                  ${brand}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 24px;">
                <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;color:#0f172a;font-weight:800;font-size:20px;letter-spacing:-0.3px;">
                  ${title}
                </div>
                <div style="height:12px;"></div>
                <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;color:#334155;font-size:14px;line-height:20px;">
                  ${intro}
                </div>
                <div style="height:18px;"></div>
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td bgcolor="#1d4ed8" style="border-radius:10px;">
                      <a href="${buttonUrl}" style="display:inline-block;padding:12px 16px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;">
                        ${buttonText}
                      </a>
                    </td>
                  </tr>
                </table>
                <div style="height:18px;"></div>
                <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;color:#64748b;font-size:12px;line-height:18px;">
                  If the button doesn’t work, copy and paste this link into your browser:<br/>
                  <a href="${buttonUrl}" style="color:#2563eb;text-decoration:underline;word-break:break-all;">${buttonUrl}</a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px;border-top:1px solid #bfdbfe;background:#eff6ff;">
                <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;color:#475569;font-size:12px;line-height:18px;">
                  ${footerNote}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { html, text };
}
