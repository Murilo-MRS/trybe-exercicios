describe('04 - Classe Quadra possui um metódo abstrada "reservar" que compila ao ser implementado nas classes que extendem da class Quadra', () => {
  it('possui um metódo abstrada "reservar" que pode ser implementado', () => {
    expect('Quadra.exists').toCompile();
    expect('Quadra.reservar.abstract').notToCompile();
    expect('Quadra.reservar').toCompile();
  });
});
