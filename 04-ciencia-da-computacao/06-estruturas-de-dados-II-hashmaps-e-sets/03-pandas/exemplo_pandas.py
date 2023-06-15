import pandas as pd


dicionario_de_notas = {
    "nome": ["Maria", "João", "Fernanda", "Túlio"],
    "primeira_nota": [9, 8, 7, 8],
    "segunda_nota": [8, 7, 9, 3],
}


def calculate_status(nota):
    return "Aprovado" if nota >= 7 else "Reprovado"


df = pd.DataFrame(dicionario_de_notas)
df["mean"] = (df["primeira_nota"] + df["segunda_nota"]) / 2
df["status"] = df["mean"].apply(calculate_status)

print(df)
