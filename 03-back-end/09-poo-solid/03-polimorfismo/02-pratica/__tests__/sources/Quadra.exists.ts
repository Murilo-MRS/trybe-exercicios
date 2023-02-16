import { IAgenda } from '../../src/interfaces/IAgenda';
import Quadra from '../../src/Quadra';

class QuadraChild extends Quadra {
  protected reservar<T>(horaReserva: Date): IAgenda<T> {
    return { data: horaReserva, protocolo: '', regras: {} as T}
  }
}

const quadra = new QuadraChild();
