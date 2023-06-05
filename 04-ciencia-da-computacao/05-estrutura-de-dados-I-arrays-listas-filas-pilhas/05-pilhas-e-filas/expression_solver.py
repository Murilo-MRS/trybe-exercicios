from stack import Stack


def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(" ")

    for token in tokens_list:
        if token == "+":
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "*":
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        else:
            # add the number operation
            stack.push(int(token))

    return stack.pop()


print(solve_expression("5 10 + 3 *"))


"""
Agora vamos praticar! Vamos implementar uma função,
utilizando stacks, para calcular a expressões pós fixa.
Vamos utilizar o mesmo exemplo que vimos anteriormente:(A + b) * C.
Vamos implementar uma função que receba essa expressão,
em formato de string, pós fixa e então calcule o resultado da expressão.

O primeiro passo é criar o arquivo expression_solver.py e então escreveremos
todo o nosso código nele. Depois iremos declarar uma função chamada
solve_expression(), que receberá uma expressão no formato texto como argumento.
A função irá instanciar uma pilha para nos auxiliar na resolução da expressão.
O código abaixo demonstra essa primeira parte.
"""
