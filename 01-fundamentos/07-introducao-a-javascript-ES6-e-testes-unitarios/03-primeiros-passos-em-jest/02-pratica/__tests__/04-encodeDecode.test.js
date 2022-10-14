const { encode, decode } = require("../04-encodeDecode");

describe("Teste das funçoes encode e decode", () => {
  test("Teste se encode e decode são funções", () => {
    expect(typeof encode).toEqual("function");
  });

  test("Teste se encode e decode são funções", () => {
    expect(typeof decode).toEqual("function");
  });

  test("Teste se decode retornão algo", () => {
    expect(decode).toBeDefined();
  });
  
  test("Teste se encode retornão algo", () => {
    expect(encode).toBeDefined();
  });

});

describe('a função Encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    test('teste "a" é convertida em 1', () => {
        expect(encode('asa')).toBe('1s1');
    });

    test('teste "e" é convertida em 2', () => {
        expect(encode('ele')).toBe('2l2');
    });

    test('teste "i" é convertida em 3', () => {
        expect(encode('xis')).toBe('x3s');
    });

    test('teste "o" é convertida em 4', () => {
        expect(encode('ovo')).toBe('4v4');
    });

    test('teste "u" é convertida em 5', () => {
        expect(encode('urs')).toBe('5rs');
    });

    test('a string que é retornada pelas funções têm o mesmo número de caracteres do parametro', () => {
        expect(encode('urs').length).toEqual(3);
    });
});

describe('a função Decode teste se os numeros 1, 2, 3, 4 e 5 são convertidas em a, e, i, o, u', () => {
    test('teste "a" é convertida em 1', () => {
        expect(decode('1s1')).toBe('asa');
    });

    test('teste "e" é convertida em 2', () => {
        expect(decode('2l2')).toBe('ele');
    });

    test('teste "i" é convertida em 3', () => {
        expect(decode('x3s')).toBe('xis');
    });

    test('teste "o" é convertida em 4', () => {
        expect(decode('4v4')).toBe('ovo');
    });

    test('teste "u" é convertida em 5', () => {
        expect(decode('5rs')).toBe('urs');
    });
    
    test('a string que é retornada pelas funções têm o mesmo número de caracteres do parametro', () => {
        expect(decode('5rs').length).toEqual(3);
    });
});