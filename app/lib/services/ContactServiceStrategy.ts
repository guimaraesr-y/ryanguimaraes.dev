import type { ContactData, ServiceResult, IContactServiceStrategy } from "./types";

export class ContactService implements IContactServiceStrategy {
  constructor(private provider: IContactServiceStrategy) {}

  async sendToOwner(data: ContactData): Promise<ServiceResult> {
    return this.provider.sendToOwner(data);
  }

  async sendToVisitor(data: ContactData, visitorEmail: string): Promise<ServiceResult> {
    return this.provider.sendToVisitor(data, visitorEmail);
  }
}
