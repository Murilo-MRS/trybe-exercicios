const sum = require('./01-sum');

describe(' A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    test('A função sum(4, 5) deve retornar 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    test('A função sum(0, 0) deve retornar 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    test(`A função sum(4, '5') deve lançar um erro`, () => {
        expect(() => {
            sum(4, '5')
        }).toThrow(Error);
    });

    test(`A função sum(4, '5') deve lançar um erro  "parameters must be numbers"`, () => {
        expect(() => {
            sum(4, '5')
        }).toThrowError('parameters must be numbers');
    });
});
