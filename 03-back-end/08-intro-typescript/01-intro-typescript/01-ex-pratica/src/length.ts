// ./length.ts
// lembrete: mudar o array units e a base para o cálculo em cada arquivo!

import readline from 'readline-sync'; // importamos o pacote readline-sync
const unitsLength = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsLength.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = unitsLength.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}

function exec() {
  // pegamos o valor a ser convertido digitado pela pessoa usuária
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readline.keyInSelect(unitsLength, 'Escolha um número para a unidade base:');

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readline.keyInSelect(unitsLength, 'Escolha um número para a conversão:');

  const toUnitChoice = unitsLength[toUnitChoiceIndex];
  const fromUnitChoice = unitsLength[fromUnitChoiceIndex];

  // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  
  const result = convert(value, fromUnitChoice, toUnitChoice);

  // montamos a mensagem de saída
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  // printamos a mensagem de saída no terminal
  console.log(message);
}

exec();