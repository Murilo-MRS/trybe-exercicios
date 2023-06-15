import pandas as pd


dicionario_de_notas = {
    "nome": ["Maria", "João", "Fernanda", "Túlio"],
    "primeira_nota": [9, 8, 7, 8],
    "segunda_nota": [8, 7, 9, 3],
}


meu_primeiro_dataframe = pd.DataFrame(dicionario_de_notas)

print(meu_primeiro_dataframe)
