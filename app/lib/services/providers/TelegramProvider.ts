/*
import axios from "axios";
import type { ContactData, ServiceResult, IContactServiceStrategy } from "../types";

// Para ativar:
// 1. Criar conta no Telegram BotFather (@BotFather)
// 2. Criar um novo bot e obter o token
// 3. Obter o chat_id do seu Telegram (pode usar @userinfobot)
// 4. Configurar variáveis de ambiente:
//    TELEGRAM_BOT_TOKEN=seu_token_aqui
//    TELEGRAM_CHAT_ID=seu_chat_id_aqui

export class TelegramProvider implements IContactServiceStrategy {
  private botToken: string;
  private chatId: string;

  constructor() {
    this.botToken = process.env.TELEGRAM_BOT_TOKEN || "";
    this.chatId = process.env.TELEGRAM_CHAT_ID || "";
  }

  async sendToOwner(data: ContactData): Promise<ServiceResult> {
    try {
      const message = `*Novo contato do portfólio*\n\n*Nome:* ${data.name}\n*Email:* ${data.email}\n\n*Mensagem:*\n${data.message}`;
      
      await axios.post(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
        chat_id: this.chatId,
        text: message,
        parse_mode: "Markdown",
      });
      
      return { success: true };
    } catch (error) {
      return { success: false, error: String(error) };
    }
  }

  async sendToVisitor(data: ContactData, visitorEmail: string): Promise<ServiceResult> {
    // Telegram não envia mensagens para usuários diretamente
    // Apenas confirma que a mensagem foi recebida
    return { success: true };
  }
}
*/
