import { DynamicModule, Module } from '@nestjs/common';
import { PagarMeService } from './services/pagar-me.service';
import { PagarMeAccessDataInterface } from 'pagarme-ts';

@Module({})
export class PagarMeModule {
  static forRoot(accessData: PagarMeAccessDataInterface): DynamicModule {
    const PROVIDERS = [
      {
        provide: PagarMeService,
        useValue: new PagarMeService(accessData),
      },
    ];
    return {
      module: PagarMeModule,
      providers: [...PROVIDERS],
      exports: [...PROVIDERS],
      global: true,
    };
  }
}
