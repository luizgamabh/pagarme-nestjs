import { DynamicModule, Module } from '@nestjs/common';
import { PagarMeService } from './services/pagar-me.service';
import { PagarMeAccessData } from './interfaces/pagar-me.interface';

@Module({})
export class PagarMeModule {
  static forRoot(accessData: PagarMeAccessData): DynamicModule {
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
    };
  }
}
