import pandas as pd


chuvas_regiao_morumbi = pd.read_csv("chuvas_morumbi.csv")
# to_csv() -> converte para csv
# converter para json
# obs.: a extensão do arquivo precisa ser .json
chuvas_regiao_morumbi.to_json("chuvas_morumbi.json")
# isnull() ou isna() -> verifica se há valores nulos ou ausentes no dataframe
# (retorna True ou False)

# print(chuvas_regiao_morumbi.isnull())
# meu_dataframe.isnull().sum() -> retorna a quantidade de valores nulos
# ou ausentes em cada coluna

# apply() -> aplica uma função a cada elemento do dataframe

# groupby() -> agrupa os elementos do dataframe de acordo com uma coluna
# print(df.groupby(by="status").count())

# merge() -> junta dois dataframes de acordo com uma coluna em comum,
# caso seja necessário, utlize how= para definir o tipo de junção
# (left, right, inner, outer)

primeira_nota = pd.DataFrame(
    {
        "nome": ["maria", "joão", "pedro", "ana"],
        "primeira_nota": [9, 8, 7, 8],
    }
)

segunda_nota = pd.DataFrame(
    {"nome": ["maria", "joão", "pedro", "ana"], "segunda_nota": [8, 7, 9, 3]}
)

par_de_notas = primeira_nota.merge(segunda_nota)
print(par_de_notas)
#     nome  primeira_nota  segunda_nota
# 0  maria              9             8
# 1   joão              8             7
# 2  pedro              7             9
# 3    ana              8             3

# unique() -> retorna os valores únicos de uma coluna
print(primeira_nota["nome"].unique())

# mean()) -> retorna a média dos valores de uma coluna
# print(primeira_nota["primeira_nota"].mean())
# mode() -> retorna a moda dos valores de uma coluna
# print(primeira_nota["primeira_nota"].mode())
# median() -> retorna a mediana dos valores de uma coluna
# print(primeira_nota["primeira_nota"].median())
# max() -> retorna o maior valor de uma coluna
# print(primeira_nota["primeira_nota"].max())
# min() -> retorna o menor valor de uma coluna
# print(primeira_nota["primeira_nota"].min())
# sum() -> retorna a soma dos valores de uma coluna
# print(primeira_nota["primeira_nota"].sum())
# count() -> retorna a quantidade de valores de uma coluna
# print(primeira_nota["primeira_nota"].count())
