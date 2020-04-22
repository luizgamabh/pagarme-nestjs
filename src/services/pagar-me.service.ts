import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ResultDto } from '../dtos/result.dto';
import { Pagarme, PagarMeAccessDataInterface } from 'pagarme-ts';

@Injectable()
export class PagarMeService {
  public readonly api: Pagarme;

  constructor(accessData: PagarMeAccessDataInterface) {
    this.api = new Pagarme(accessData);
  }

  async connect(): Promise<ResultDto<Pagarme>> {
    const [error, client] = await this.api
      .connect()
      .then(client => [null, client])
      .catch(error => [error, null]);
    if (error) {
      throw new HttpException(
        new ResultDto(false, undefined, 'Authentication error', error),
        HttpStatus.UNAUTHORIZED,
      );
    }
    return new ResultDto(true, this.api);
  }
}
