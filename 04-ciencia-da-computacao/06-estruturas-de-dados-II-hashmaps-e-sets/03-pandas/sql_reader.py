import pandas as pd
import pymysql
from sqlalchemy import create_engine

database_url = "mysql+pymysql://root:admin@localhost:3306/estudantes"

engine = create_engine(database_url)

df = pd.read_sql("SELECT * FROM notas_estudantes;", engine)

print(df.head())
# read_sql() -> lê uma query e retorna um DataFrame
# to_sql() -> converte um DataFrame para uma tabela no banco de dados
# df.to_sql(
#     name="notas",
#     con=engine,
#     index=false,
#     if_exists='replace'
# )
# Com o valor fail, uma exceção será levantada caso a tabela já exista.
# Com o valor replace, a tabela atual será _dropada e uma nova será
# criada com os valores do DataFrame inseridos.
# Com o valor append, os dados serão simplesmente inseridos na tabela.
