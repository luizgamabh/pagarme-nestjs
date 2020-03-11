import {Injectable} from "@nestjs/common";
import {defaultPagarMeFooOptions, PagarMeFooOptions} from "../interfaces/pagar-me.interface";

@Injectable()
export class PagarMeService {
    options: PagarMeFooOptions;

    constructor(options: Partial<PagarMeFooOptions>) {
        this.options = {
            ...defaultPagarMeFooOptions,
            ...options
        }
    }

    foo() {
        return this.options.bar || 'noway'
    }
}
