import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();

clube.adicionarQuadra(quadraFutebol);

const reservaQuadra = clube.buscarQuadra<QuadraFutebol>(0).reservar(new Date('2022-11-03'))

console.log(clube);
console.log(clube.buscarQuadra(0));
console.log(reservaQuadra);
