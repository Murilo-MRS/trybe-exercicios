import crypto from 'crypto';
import { IAgenda } from "./interfaces/IAgenda";
import { ITenis } from "./interfaces/ITenis";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

class QuadraTenis extends Quadra {
  // busca os dados da quadra referenciada
  public tenisData: ITenis = normas.tenis;

  // gerando protocolo de agendamento
  public reservar<ITenis>(reservaData: Date): IAgenda<ITenis> {
    const protocolo = crypto.randomBytes(8).toString('hex');

    return {
      protocolo,
      data: reservaData,
      regras: this.tenisData as unknown as ITenis,
    }
    // return { assim tbm da certo
    //   protocolo,
    //   data: reservaData,
    //   regras: this.tenisData,
    // } as IAgenda<ITenis>
  }
}

export default QuadraTenis;