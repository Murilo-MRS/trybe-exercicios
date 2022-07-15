const testingScope = (escopo) => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  (escopo === true) ? console.log(`${ifScope} ótimo, fui utilizada no escopo !`) : console.log(elseScope)
  }

  testingScope(true);