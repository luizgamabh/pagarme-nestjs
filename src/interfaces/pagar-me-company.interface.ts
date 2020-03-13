import { IPagarMeEmailTemplate } from './pagar-me-email-template.interface';

export interface IPagarMeCompany {
  create: (opts: any, body: any) => Promise<any> | Error;
  createTemporary: (opts: any, body: any) => Promise<any> | Error;
  activate: () => any;
  update: () => any;
  current: () => (opts: any) => Promise<any> | Error;
  resetKeys: () => any;
  affiliationProgress: () => any;
  updateBranding: () => any;
  emailTemplates: IPagarMeEmailTemplate;
}
