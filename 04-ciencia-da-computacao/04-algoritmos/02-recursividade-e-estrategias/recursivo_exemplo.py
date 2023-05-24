def countdown(n):
    if n == 0:  # caso base
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)  # caso recursivo


countdown(5)


def factorial(n):
    if n <= 1:  # caso base
        return 1
    else:
        return n * factorial(n - 1)  # caso recursivo


def sum_recursive(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + sum_recursive(n - 1)


sum_recursive(4)
