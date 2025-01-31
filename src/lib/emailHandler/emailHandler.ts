import ContactInterface from "../../domain/contact/interfaces";
import nodemailer, { Transporter } from "nodemailer"
import Mail from "nodemailer/lib/mailer";

class EmailHandler {
    private transporter: Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_EMAIL, // Seu endereço de e-mail
                pass: process.env.GMAIL_PASSWORD, // Sua senha de e-mail
            }
        });
    }

    private sendEmail = async (email: Mail.Options) => {
        return new Promise((resolve, reject) => {
            this.transporter.sendMail(email)
                .then(data => {
                    resolve(data)
                })
                .catch((err: Error) => { 
                    console.log(`Erro ao enviar email para ${email.to}: + ${err.message}\n${err.stack}`);
                    reject(err);
                })
        })
    }

    public emailUserConfirmation = (contact: ContactInterface) => {
        const email = {
            from: `"Ryan Guimarães" <${ process.env.GMAIL_EMAIL }>`,
            to: contact.email,
            subject: `Resposta a: ${ contact.subject }`,
            html: `
                <div style="max-width:650px;margin:auto">
                    <style>* { margin: 0; }</style>
                    <div style="background-color:#1b2735;text-align:center;padding: 2%;">
                        <img src="https://ryanguimaraes.dev/imgs/logo-1x-compressed.gif" style="width:75%;max-width: 200px;" alt="Ryan Guimarães">
                    </div>
                    <div style="padding:4%;">
                        <h1 style="padding-bottom:10px">Olá ${ contact.firstName }! 👋🏻</h1>
                        <p>
                            Eu sou Ryan! Obrigado por entrar em contato comigo pelo meu 
                            <a href="https://ryanguimaraes.dev" style="color:#1b2735">website</a>!
                        </p>
                        <p>
                            Estou passando para avisar que recebi a sua mensagem com sucesso 
                            e assim que possível entrarei em contato com você.
                        </p>
                        <br>
                        
                        <div style="width:100%;text-align:center;padding: 5% 0">
                            <img style="aspect-ratio:335/411;" src="https://c.tenor.com/qMH5o_XizbcAAAAd/tenor.gif" alt="Programando">
                        </div>
                        
                        <p>
                            Caso precise adicionar informações ou anexos à sua mensagem, sinta-se livre para responder esse email conforme necessário.
                        </p>
                        
                        <br>
                        <p>Atenciosamente,</p>
                        <br>
                        <p>Ryan Guimarães</p>
                    </div>
                </div>
            `
        }

        this.sendEmail(email);
    }
}

export default EmailHandler;

