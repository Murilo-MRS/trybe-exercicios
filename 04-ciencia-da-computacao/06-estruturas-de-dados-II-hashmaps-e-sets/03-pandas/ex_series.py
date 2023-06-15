import pandas as pd


cavaleiros_de_bronze = ["Ikki", "Hyoga", "Seyia", "Shiryu", "Shun"]

minha_primeira_series = pd.Series(cavaleiros_de_bronze)
print(minha_primeira_series)

sailors = {
    "Moon": "Usagi",
    "Mercury": "Ami",
    "Mars": "Rei",
    "Jupter": "Makoto",
    "Venus": "Minako",
}

minha_segunda_series = pd.Series(sailors)
print(minha_segunda_series)
