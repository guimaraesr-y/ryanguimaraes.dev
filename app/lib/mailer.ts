import nodemailer from "nodemailer";

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

if (!gmailUser || !gmailAppPassword) {
  console.warn("⚠️ Email configuration missing: GMAIL_USER or GMAIL_APP_PASSWORD not set");
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailAppPassword,
  },
});

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  if (!gmailUser || !gmailAppPassword) {
    return {
      success: false,
      error: "Configuração de email não disponível. Configure GMAIL_USER e GMAIL_APP_PASSWORD.",
    };
  }

  const mailOptions = {
    from: gmailUser,
    to: gmailUser,
    subject: `Novo contato do portfólio: ${name}`,
    text: `
Nome: ${name}
Email: ${email}

Mensagem:
${message}
    `,
    html: `
<h2>Novo contato do portfólio</h2>
<p><strong>Nome:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<hr>
<p><strong>Mensagem:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      error: "Erro ao enviar email. Tente novamente mais tarde.",
    };
  }
}
