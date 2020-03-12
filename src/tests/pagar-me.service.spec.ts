require('dotenv').config();
import { Test, TestingModule } from '@nestjs/testing';
import { PagarMeModule, PagarMeService } from '..';
import { ResultDto } from '../dtos/result.dto';

describe('PagarMeService', () => {
  let service: PagarMeService;

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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of transactions', async () => {
    const transactions: ResultDto = await service.connect();
    expect(transactions.data).toBeInstanceOf(Array);
  });
});
