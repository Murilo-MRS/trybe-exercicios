import pandas as pd


df_brazil = pd.DataFrame(
    {
        "Grande Região": [
            "Norte",
            "Nordeste",
            "Sudeste",
            "Sul",
            "Centro-Oeste",
        ],
        "Número de Municípios": [450, 1794, 1668, 1191, 467],
        "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
        "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
        "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62],
    }
)

print(
    f"rows = {df_brazil.shape[0]}"
    f"\ncolumns = {df_brazil.shape[1]}"
    f"\ndescribe = {df_brazil.describe()}"
    f"\nNon-null count = {df_brazil.info()}"
)
