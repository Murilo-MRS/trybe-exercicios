const myFizzBuzz = require('../03-myFizzBuzz');

describe('3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    
    test('Verifica se o número divisível por 3 e 5 e retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })
    
    test('número divisível por 3 e retorna "fizz"', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
    })
    
    test('número divisível por 5 e retorna "buzz"', () => {
        expect(myFizzBuzz(25)).toBe('buzz');
    })
    
    test('número que não é divisível por 3 ou 5 e retorna o numero', () => {
        expect(myFizzBuzz(7)).toBe(7);
    })
    
    test('parâmetro que não é um número e retorna false', () => {
        expect(myFizzBuzz('a')).toBe(false);
    })
    
});