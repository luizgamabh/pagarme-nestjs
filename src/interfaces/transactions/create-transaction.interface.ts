/**
 * Transaction Rules
 */
export interface ITransactionRules {
  liable: boolean;
  charge_processing_fee: boolean;
  percentage: string;
  amount: string;
  charge_remainder_fee: boolean;
  recipient_id: string;
}

/**
 * Transaction common properties
 */
export interface ICommonTransaction {
  amount: number;
  soft_descriptor?: string;
  capture?: boolean;
  split_rules?: ITransactionRules[];
}

/**
 * Sync transaction
 */
export interface ISyncTransaction {
  async?: false;
}

/**
 * Async transaction
 */
export interface IAsyncTransaction {
  async: true;
  postback_url?: string;
}

/**
 * Credit card transaction
 */
export interface ICreditCardTransaction {
  payment_method: 'credit_card';
  card_hash: string;
  card_id: string;
  card_holder_name: string;
  card_expiration_date: string;
  card_number: string;
  card_cvv: string;
  installments: number;
}

/**
 * Boleto transaction
 */
export interface IBoletoTransaction {
  payment_method: 'boleto';
  installments?: 1;
  boleto_expiration_date?: string;
  boleto_instructions?: string;
}

/**
 * Create transaction
 */
export type ICreateTransaction = ICommonTransaction &
  (ICreditCardTransaction | IBoletoTransaction) &
  (ISyncTransaction | IAsyncTransaction);
