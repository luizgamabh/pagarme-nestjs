import { IPagarMeCompany } from './pagar-me-company.interface';

export interface IPagarMeClient {
  company: IPagarMeCompany;
  companySegments: any;
  chargebacks: any;
  session: any;
  transactions: any;
  payables: any;
  user: any;
  invites: any;
  splitRules: any;
  antifraudAnalyses: any;
  recipients: any;
  bulkAnticipations: any;
  bankAccounts: any;
  plans: any;
  subscriptions: any;
  cards: any;
  acquirersConfigurations: any;
  acquirers: any;
  transfers: any;
  balance: any;
  balanceOperations: any;
  events: any;
  gatewayOperations: any;
  chargebackOperations: any;
  postbacks: any;
  security: any;
  customers: any;
  zipcodes: any;
  paymentLinks: any;
  onboardingAnswers: any;
  onboardingQuestions: any;
  orders: any;
  reprocessedTransactions: any;
  authentication: {
    api_key: string;
  };
}
