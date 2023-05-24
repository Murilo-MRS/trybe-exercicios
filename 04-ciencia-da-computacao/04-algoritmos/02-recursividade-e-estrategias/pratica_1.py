def conta_pares(n):
    numero_de_pares = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            numero_de_pares += 1
    return numero_de_pares
