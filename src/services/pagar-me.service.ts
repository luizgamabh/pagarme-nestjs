import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { pagarme } from 'pagarme';
import {
  PagarMeAccessData,
  PagarMeModel,
} from '../interfaces/pagar-me.interface';
import { promised } from '../utils/promised';
import { ResultDto } from '../dtos/result.dto';

@Injectable()
export class PagarMeService {
  private readonly accessData: {
    email?: string;
    password?: string;
    api_key?: string;
    encryption_key?: string;
  };
  model: PagarMeModel = {};

  constructor(accessData: PagarMeAccessData) {
    const { strategy, ...connectionData } = accessData;
    this.accessData = connectionData;
  }

  async connect() {
    const [error, connection] = await promised(
      pagarme.client.connect(this.accessData),
    );
    if (error) {
      return new HttpException(
        new ResultDto(false, undefined, 'Authentication error', error),
        HttpStatus.FORBIDDEN,
      );
    }
    this.model.connection = connection;
    return this.model.connection;
  }

  async transactions() {
    const [error, transactions] = await promised(
      pagarme.client.transactions.all(),
    );
    if (error) {
      return new HttpException(
        new ResultDto(false, undefined, 'Error fetching transactions', error),
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    this.model.transactions = transactions;
    return this.model.transactions;
  }
}
