import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import pagarme from 'pagarme';
import {
  IPagarMeAccessData,
  IPagarMeModel,
} from '../interfaces/pagar-me.interface';
import { promised } from '../utils/promised';
import { ResultDto } from '../dtos/result.dto';
import { PagarMeModel } from '../models/pagar-me.model';

@Injectable()
export class PagarMeService {
  private readonly accessData: {
    email?: string;
    password?: string;
    api_key?: string;
    encryption_key?: string;
  };
  model: IPagarMeModel = new PagarMeModel();

  constructor(accessData: IPagarMeAccessData) {
    const { strategy, ...connectionData } = accessData;
    this.accessData = connectionData;
  }

  async connect(): Promise<ResultDto<IPagarMeModel>> {
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
    const [err] = await promised(this.transactions());
    if (err) {
      return this.unprocessable(err);
    }
    return new ResultDto(true, this.model);
  }

  async transactions(): Promise<ResultDto<IPagarMeModel>> {
    const [error, transactions] = await promised(
      this.model.client.transactions.all(),
    );
    if (error) {
      return this.unprocessable(error);
    }
    this.model.transactions = transactions;
    return new ResultDto(true, this.model);
  }

  unprocessable(error?): never {
    throw new HttpException(
      new ResultDto(false, undefined, 'Error fetching transactions', error),
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}
