const salarioBruto = 5000.0;

let aliquotaInss;
let aliquotaIr;
// calculo INSS
if (salarioBruto < 0) {
  console.log("Valor inválido");
} else if (salarioBruto >= 5189.82) {
  aliquotaInss = 570.88;
} else if (salarioBruto >= 2594.93) {
  aliquotaInss = 0.11 * salarioBruto;
} else if (salarioBruto >= 1556.95) {
  aliquotaInss = 0.09 * salarioBruto;
} else if (salarioBruto < 1556.95) {
  aliquotaInss = 0.08 * salarioBruto;
}

const salarioDescontadoInss = salarioBruto - aliquotaInss;

// console.log(salarioDescontadoInss);
// calculo IR
if (salarioDescontadoInss >= 4664.68) {
  aliquotaIr = ((0.275 * salarioDescontadoInss)- 869.36);
} else if (salarioDescontadoInss >= 3751.06) {
  aliquotaIr = ((0.225 * salarioDescontadoInss)- 636.13);
} else if (salarioDescontadoInss >= 2826.66) {
  aliquotaIr = ((0.15 * salarioDescontadoInss) - 354.8);
} else if (salarioDescontadoInss >= 1903.99) {
  aliquotaIr = ((0.075 * salarioDescontadoInss) - 142.8);
} else {
  aliquotaIr = 0;
}

const salarioLiquido = salarioDescontadoInss - aliquotaIr;

console.log("Salário líquido: R$" + salarioLiquido);
