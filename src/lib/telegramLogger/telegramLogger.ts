import { InternalServerError } from "@/errors/internalServerError";
import ContactInterface from "../contact/interfaces";

import { config as dotenv } from "dotenv-safe";
dotenv();

class TelegramLogger {
    private ENDPOINT: string;
    private CHAT_ID: string | number;

    constructor() {
        this.ENDPOINT = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;
        this.CHAT_ID = process.env.ADMIN_TELEGRAM_CHAT_ID!;
    }

    private sendTelegramMessage = async (chatId: string | number, message: string) => {
        return new Promise((resolve, reject) => {
            fetch(this.ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            }).then((res) => {
                if (!res.ok) {
                    console.error(`Erro status ${res.status} (${res.statusText}) ao enviar mensagem para o telegram`);
                    reject(res);
                }
                resolve(res);
            }).catch((err) => {
                console.error(err);
                reject(err);
            })
        })
    }

    public warnAdmin = (contact: ContactInterface) => {
        if(!this.CHAT_ID) {
            throw new InternalServerError("Missing ADMIN_TELEGRAM_CHAT_ID enviroment variable");
        }

        let message = "Novo contato pelo site!\n\n"
        for (const key in contact) {
            message += `${key}: ${contact[key as keyof ContactInterface]}\n`
        }

        this.sendTelegramMessage(this.CHAT_ID, message);
    }
}

export default TelegramLogger;
