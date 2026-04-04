import nodemailer from "nodemailer";
import type { ContactData, ServiceResult, IContactServiceStrategy } from "../types";

const ownerEmailTemplate = (data: ContactData) => `
Nome: ${data.name}
Email: ${data.email}

Mensagem:
${data.message}
`;

const visitorEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Obrigado pelo contato!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%); border-radius: 16px; overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(90deg, #8B5CF6, #06B6D4); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                ✨ Obrigado pelo contato!
              </h1>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px; color: #ededed; font-size: 18px; line-height: 1.6;">
                Olá <strong style="color: #8B5CF6;">${name}</strong>!
              </p>
              
              <p style="margin: 0 0 20px; color: #a1a1aa; font-size: 16px; line-height: 1.6;">
                Obrigado por entrar em contato pelo meu portfólio. 
                Recebi sua mensagem e responderei assim que possível!
              </p>
              
              <p style="margin: 0 0 30px; color: #a1a1aa; font-size: 16px; line-height: 1.6;">
                Enquanto isso, você pode conhecer meus projetos no GitHub ou LinkedIn.
              </p>
              
              <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-radius: 8px; background: linear-gradient(90deg, #8B5CF6, #06B6D4);">
                    <a href="https://github.com/guimaraesr-y" style="display: block; padding: 14px 28px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 16px;">
                      Ver Meus Projetos
                    </a>
                  </td>
                </tr>
              </table>
              
              <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #27272a;">
                <p style="margin: 0 0 8px; color: #ffffff; font-size: 18px; font-weight: 600;">
                  Ryan Guimarães
                </p>
                <p style="margin: 0; color: #71717a; font-size: 14px;">
                  Full-Stack Developer
                </p>
                <p style="margin: 8px 0 0; color: #8B5CF6; font-size: 14px;">
                  github.com/guimaraesr-y
                </p>
              </div>
            </td>
          </tr>
          
          <tr>
            <td style="background: #0a0a0a; padding: 20px; text-align: center; border-top: 1px solid #27272a;">
              <p style="margin: 0; color: #52525b; font-size: 12px;">
                © ${new Date().getFullYear()} Ryan Guimarães. Todos os direitos reservados.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export class GmailProvider implements IContactServiceStrategy {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }

  async sendToOwner(data: ContactData): Promise<ServiceResult> {
    try {
      await this.transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER!,
        subject: `Novo contato do portfólio: ${data.name}`,
        text: ownerEmailTemplate(data),
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: String(error) };
    }
  }

  async sendToVisitor(data: ContactData, visitorEmail: string): Promise<ServiceResult> {
    try {
      await this.transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: visitorEmail,
        subject: `Obrigado pelo contato, ${data.name}!`,
        html: visitorEmailTemplate(data.name),
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: String(error) };
    }
  }
}
