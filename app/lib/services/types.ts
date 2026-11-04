export interface ContactData {
  name: string;
  email: string;
  message: string;
  ip?: string;
}

export interface ServiceResult {
  success: boolean;
  error?: string;
}

export interface IContactServiceStrategy {
  sendToOwner(data: ContactData): Promise<ServiceResult>;
  sendToVisitor(data: ContactData, visitorEmail: string): Promise<ServiceResult>;
}
