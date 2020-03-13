import { DynamicModule, Module } from '@nestjs/common';
import { PagarMeService } from './services/pagar-me.service';
import { IPagarMeAccessData } from './interfaces/pagar-me.interface';

@Module({})
export class PagarMeModule {
  static forRoot(accessData: IPagarMeAccessData): DynamicModule {
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
