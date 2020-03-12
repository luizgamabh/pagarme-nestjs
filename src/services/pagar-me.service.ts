import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import pagarme from 'pagarme';
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

  async connect(): Promise<ResultDto<any[]>> {
    const [error, client] = await pagarme.client
      .connect(this.accessData)
      .then(client => [null, client])
      .catch(error => [error, null]);
    if (error) {
      throw new HttpException(
        new ResultDto(false, undefined, 'Authentication error', error),
        HttpStatus.FORBIDDEN,
      );
    }
    this.model.client = client;
    return await this.transactions();
  }

  async transactions(): Promise<ResultDto<any[]>> {
    const [error, transactions] = await promised(
      this.model.client.transactions.all(),
    );
    if (error) {
      throw new HttpException(
        new ResultDto(false, undefined, 'Error fetching transactions', error),
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    this.model.transactions = transactions;
    return new ResultDto(true, this.model.transactions);
  }
}
