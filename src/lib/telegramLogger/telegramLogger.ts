import { InternalServerError } from "@/errors/internalServerError";
import IContactForm from "../contactFormHandler/contactFormInterface";

import { config as dotenv } from "dotenv-safe";
dotenv();

const ENDPOINT = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;
const CHAT_ID = process.env.ADMIN_TELEGRAM_CHAT_ID;

const sendTelegramMessage = async (chatId: string | number, message: string) => {
    return new Promise((resolve, reject) => {
        fetch(ENDPOINT, {
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

const telegramWarnAdmin = (contact: IContactForm) => {
    if(!CHAT_ID) {
        throw new InternalServerError("Missing ADMIN_TELEGRAM_CHAT_ID enviroment variable");
    }

    let message = "Novo contato pelo site!\n\n"
    for (const key in contact) {
        message += `${key}: ${contact[key as keyof IContactForm]}\n`
    }

    sendTelegramMessage(CHAT_ID, message);
}

export default telegramWarnAdmin;