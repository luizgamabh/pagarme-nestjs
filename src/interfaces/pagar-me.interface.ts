export interface PasswordStrategy {
  strategy: 'password';
  email: string;
  password: string;
}

export interface ApiKeyStrategy {
  strategy: 'apiKey';
  api_key: string;
}
export interface EncryptionKeyStrategy {
  strategy: 'encryptionKey';
  encryption_key: string;
}

export type PagarMeAccessData =
  | PasswordStrategy
  | ApiKeyStrategy
  | EncryptionKeyStrategy;

export interface PagarMeModel {
  client?: any;
  transactions?: any[];
}
