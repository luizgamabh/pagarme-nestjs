import { Test, TestingModule } from '@nestjs/testing';
import { PagarMeModule, PagarMeService } from '..';
import { PagarMeModel } from '../models/pagar-me.model';
import { ResultDto } from '../dtos/result.dto';
import { IPagarMeModel } from '../interfaces/pagar-me.interface';

require('dotenv').config();

describe('PagarMeService', () => {
  let service: PagarMeService;
  let connection: ResultDto<IPagarMeModel>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PagarMeModule.forRoot({
          strategy: 'apiKey',
          api_key: process.env.API_KEY || 'invalid',
        }),
      ],
    }).compile();

    service = module.get<PagarMeService>(PagarMeService);
    connection = await service.connect();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should connect to pagar.me API', async () => {
    expect(connection.data).toBeInstanceOf(PagarMeModel);
  });

  it('should return my company transactions', async () => {
    const transactions = await connection.data.client.transactions.all();
    expect(transactions).toBeInstanceOf(Array);
  });

  it('should return my company users', async () => {
    const transactions = await connection.data.client.user.all();
    expect(transactions).toBeInstanceOf(Array);
  });
});
