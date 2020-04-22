import { Test, TestingModule } from '@nestjs/testing';
import { PagarMeModule, PagarMeService } from '..';

require('dotenv').config();

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
    await service.connect();
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should connect to pagar.me API', async () => {
    const transactions = await service?.api?.client?.transactions?.all({ count: 1 });
    expect(transactions).toBeInstanceOf(Array);
  });

  it('should return my company transactions', async () => {
    const transactions = await service?.api?.client?.transactions?.all();
    expect(transactions).toBeInstanceOf(Array);
  });

  it('should return my company users', async () => {
    const transactions = await service?.api?.client?.user?.all({}, {});
    expect(transactions).toBeInstanceOf(Array);
  });
});
