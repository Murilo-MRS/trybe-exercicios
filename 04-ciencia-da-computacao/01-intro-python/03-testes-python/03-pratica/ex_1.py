def fizzbuzz(n):
    lista = []
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            lista.append("FizzBuzz")
        elif i % 3 == 0:
            lista.append("Fizz")
        elif i % 5 == 0:
            lista.append("Buzz")
        else:
            lista.append(i)
    return lista
