import pandas as pd
from sqlalchemy import create_engine
import pymysql

# usar CREATE DATABASE chuvas; antes no banco de dados
database_url = "mysql+pymysql://root:password@localhost:3306/chuvas"
print(pymysql)
engine = create_engine(database_url)
conn = engine.connect()

chuvas_regiao_morumbi = pd.read_csv("chuvas_morumbi.csv")

try:
    chuvas_regiao_morumbi.to_sql(
        name="chuvas_no_morumbi", con=engine, if_exists="replace"
    )

except Exception as error:
    print("Algo deu errado", error)
finally:
    conn.close()
