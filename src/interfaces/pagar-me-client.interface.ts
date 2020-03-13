import { IPagarMeCompany } from './pagar-me-company.interface';

export interface IPagarMeClient {
  company: IPagarMeCompany;
  companySegments: {};
  chargebacks: {};
  session: {};
  transactions: {};
  payables: {};
  user: {};
  invites: {};
  splitRules: {};
  antifraudAnalyses: {};
  recipients: {};
  bulkAnticipations: {};
  bankAccounts: {};
  plans: {};
  subscriptions: {};
  cards: {};
  acquirersConfigurations: {};
  acquirers: {};
  transfers: {};
  balance: {};
  balanceOperations: {};
  events: {};
  gatewayOperations: {};
  chargebackOperations: {};
  postbacks: {};
  security: {};
  customers: {};
  zipcodes: {};
  paymentLinks: {};
  onboardingAnswers: {};
  onboardingQuestions: {};
  orders: {};
  reprocessedTransactions: {};
  authentication: {
    api_key: string;
  };
}
