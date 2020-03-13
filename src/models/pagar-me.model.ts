import { IPagarMeModel } from '../interfaces/pagar-me.interface';

export class PagarMeModel implements IPagarMeModel {
  public client = {};
  public transactions = [];
}
