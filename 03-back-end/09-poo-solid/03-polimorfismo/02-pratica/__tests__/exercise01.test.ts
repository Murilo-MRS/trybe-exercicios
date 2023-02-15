import Quadra from "../src/Quadra";

describe('01 - Pre-requisitos', () => {
  it('interfaces/IAgenda.ts existe', () => {
    expect(() => require('../src/interfaces/IAgenda.ts')).not.toThrow();
  });
  it('src/normas/normasDeUso.ts existe', () => {
    expect(() => require('../src/normas/normasDeUso.ts')).not.toThrow();
  });
  it('src/Clube.ts existe', () => {
    expect(() => require('../src/Clube.ts')).not.toThrow();
  });
  it('src/Quadra.ts existe', () => {
    expect(() => require('../src/Quadra.ts')).not.toThrow();
  });
  it('src/Quadra.ts exporta uma classe', () => {
    expect('Quadra.exists').toCompile();
  });
});