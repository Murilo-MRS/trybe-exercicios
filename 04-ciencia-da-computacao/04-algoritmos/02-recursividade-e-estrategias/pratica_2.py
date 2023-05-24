def conta_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + conta_pares(n - 1)
    else:
        return conta_pares(n - 1)
