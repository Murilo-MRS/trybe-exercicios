def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer


"""
Ao usar lista[começo:fim:passo] nós temos “slices”, pedaços da 
lista que começam em começo (por padrão 0), terminam em fim
(por padrão, até o fim da lista) e pula de passo em passo
(por padrão, 1). ou seja, [11, 12, 21, 22, 31, 32][::2] resulta em 
[11, 21, 31].
"""
