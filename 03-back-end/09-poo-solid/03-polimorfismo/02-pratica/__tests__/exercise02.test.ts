describe('02 - Classe Quadra não pode ser instânciado', () => {
  it('Não Compila', () => {
    expect('Quadra.abstract').notToCompile();
  });
});