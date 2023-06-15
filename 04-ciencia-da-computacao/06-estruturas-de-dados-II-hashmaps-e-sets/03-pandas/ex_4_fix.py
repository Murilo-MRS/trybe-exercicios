import pandas as pd

df = pd.read_csv("pesquisa_pao_na_chapa.csv")

menor_valor = df["preco_reais"].loc[df["produto"] == "queijo muçarela"].min()

dia = df["dia_da_semana"].loc[
    (df["preco_reais"] == menor_valor) & (df["produto"] == "queijo muçarela")
]

print(dia)

maior_valor = df["preco_reais"].loc[df["produto"] == "tomate"].max()

fornecedor = df["nome_do_fornecedor"].loc[
    (df["preco_reais"] == maior_valor) & (df["produto"] == "tomate")
]

print(fornecedor)

fechado = df["dia_da_semana"].loc[
    df["preco_reais"].isnull() & (df["nome_do_fornecedor"] == "soma pão")
]

print(fechado)

# 4. Crie um novo DataFrame com o preço médio de cada produto pesquisado.

# - Mais uma vez, tal qual é no mundo da programação,
# temos inúmeras soluções a disposição. Uma delas consiste em percorrer
# todos os produtos únicos através de um `for in` em conjunto do método
# `unique()` que retorna os valores únicos em uma coluna de um DataFrame.
# Também criamos uma lista chamada `data` e a essa lista adicionamos o par
# (`nome do produto`, `media de preco`).
