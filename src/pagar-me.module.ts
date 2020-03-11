import {DynamicModule, Module} from "@nestjs/common";
import {PagarMeFooOptions} from "./interfaces/pagar-me.interface";
import {PagarMeService} from "./services/pagar-me.service";

@Module({})
export class PagarMeModule {
    static forRoot(options: PagarMeFooOptions): DynamicModule {
        const PROVIDERS = [{
            provide: PagarMeService,
            useValue: new PagarMeService(options)
        }];
        return {
            module: PagarMeModule,
            providers: [...PROVIDERS],
            exports: [...PROVIDERS],
            global: true
        }
    }
}