import { IAgenda } from '../../src/interfaces/IAgenda';
import Quadra from '../../src/Quadra';

class QuadraChild extends Quadra {
  reservar<T>(horaReserva: Date): IAgenda<T> {
    return { data: horaReserva, protocolo: 'teste', regras: {} as T }
  };
}
const quadra = new QuadraChild();

