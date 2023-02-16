import crypto from 'crypto';
import { IAgenda } from './interfaces/IAgenda';
import { IFutebol } from './interfaces/IFutebol';
import normas from './normas/normasDeUso';
import Quadra from './Quadra';

class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol
  
  public reservar<IFutebol>(reservaData: Date): IAgenda<IFutebol> {

    const protocolo = crypto.randomBytes(8).toString('hex');
    return {
      protocolo,
      data: reservaData,
      regras: this.futebolData as unknown as IFutebol,
    };
  }
}

export default QuadraFutebol;