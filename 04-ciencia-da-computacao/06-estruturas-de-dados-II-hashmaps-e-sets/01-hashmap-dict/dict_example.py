# Instanciando a classe Dict
employee_registry = {}

# Inserindo dados
# objeto[chave] = valor
employee_registry[14] = "name1"
employee_registry[23] = "name2"
employee_registry[10] = "name3"
employee_registry[9] = "name4"
print(employee_registry)

# Alterando o nome do id 10
# objeto[chave] = novo_valor
employee_registry[10] = "name30"
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")

# Instanciação do objeto vazio
dict1 = {}
dict2 = dict()

# Instanciação com preenchimento inicial de dados
dict3 = {1: "name1", 2: "name2"}
print(f"Dicionário 1: {dict1}")
print(f"Dicionário 2: {dict2}")
print(f"Dicionário 3: {dict3}")

# Inserção e Alteração
# Se a chave não existir no dict, uma nova entrada será criada
# Se já existir, o valor será sobreposto
dict1[14] = "name1"
print(f"Novo dicionário 1, pós inserção/alteração: {dict1}")

# Consulta e Remoção
# Se a chave não existir no dict, causa erro
name = dict1[14]
del dict1[14]
print(f"Dicionário 1 pós consulta e deleção: {dict1}")


# exercicio 5
double = {i: i * 2 for i in range(3, 21)}

print(double)

# exercicio 6
count_chars = {}

string = "bbbbaaaacccaaaaaaddddddddccccccc"

for char in string:
    if char not in count_chars:
        count_chars[char] = 1
    else:
        count_chars[char] += 1

print(count_chars)

# exercicio 7
# double = {i: i*2 for i in range(3, 21)}

for key in double.keys():
    if key % 2 != 0:
        double[key] = key * 3


print(double)


def intersection(list_a, list_b):
    seen_in_a = {}

    for item in list_a:
        seen_in_a[item] = True

    answer = []
    for item in list_b:
        if item in seen_in_a:
            answer.append(item)

    return answer


lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
lista2 = [2, 4, 6, 8, 10, 12, 14, 16, 18]
print(intersection(lista1, lista2))


def screen(text):
    screen_dict = {}

    for char in text:
        first_char = char[0]
        if first_char not in screen_dict:
            screen_dict[first_char] = [char]
        else:
            screen_dict[first_char].append(char)

    return screen_dict


text_list = [
    "ana",
    "maria",
    "joana",
    "mariana",
    "joaquina",
    "marcela",
    "maristela",
]
# print(screen(text_list))
for key, value in screen(text_list).items():
    print(f"{key}: {value}")
