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
  sendToVisitor(data: ContactData, visitorEmail: string): Promise<ServiceResult>;
}
