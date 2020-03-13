export interface IPasswordStrategy {
  strategy: 'password';
  email: string;
  password: string;
}

export interface IApiKeyStrategy {
  strategy: 'apiKey';
  api_key: string;
}
export interface IEncryptionKeyStrategy {
  strategy: 'encryptionKey';
  encryption_key: string;
}

export type IPagarMeAccessData =
  | IPasswordStrategy
  | IApiKeyStrategy
  | IEncryptionKeyStrategy;

export interface IPagarMeModel {
  client?: any;
  transactions?: any[];
}
