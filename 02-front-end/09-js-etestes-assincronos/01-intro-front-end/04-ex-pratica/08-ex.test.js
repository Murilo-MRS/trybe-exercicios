const { getPokemonDetails } = require('./08-ex.js');

// EXERCICIO 09 - TESTES DA FUNCAO CRIADA NO EXERCICIO 8

describe('A função getPokemonDetails', () => {
    it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
      // Escreva aqui seu código
      const expectError = new Error('Não temos esse pokémon para você :(');
      getPokemonDetails('Pikachu', (error, _message) => {
        try {
            expect(error).toEqual(expectError);
            done();
        } catch (error) {
            done(error);
        }
      })
    });
  
    it('retorna um pokémon que existe no banco de dados', (done) => {
      // Escreva aqui seu código
      const expectMessage =   `Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas`;
      getPokemonDetails('Charmander', (_error, message) => {
        try {
            expect(message).toEqual(expectMessage);
            done();
        } catch (error) {
            done(error);
        }
      })
    });
  });
