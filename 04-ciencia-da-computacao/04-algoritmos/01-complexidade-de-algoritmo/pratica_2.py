""" Mesmo que, para o exemplo dado, o valor de `n` seja muito menor que
o valor da constante `100`, para valores de `n` grandes o valor da
constante se torna desprezível. Esse problema, então, é `O(n)`.
Pelo mesmo motivo, a complexidade de espaço é constante, ou seja, `O(1)`"""

import random


def random_averages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages
