describe('03 - Classe Quadra possui um metódo abstrada "reservar"', () => {
  it('não deve compilar quando ao herdar sem implementar o método', () => {
    expect('Quadra.exists').toCompile();
    expect('Quadra.reservar.abstract').notToCompile();
  });
});