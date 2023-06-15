import pandas as pd
from sqlalchemy import create_engine
import pymysql

database_url = "mysql+pymysql://root:admin@localhost:3306/chuvas"

engine = create_engine(database_url)

chuvas_regiao_morumbi = pd.read_csv("chuvas_morumbi.csv")

chuvas_regiao_morumbi.to_sql(
    name="chuvas_no_morumbi", con=engine, if_exists="replace"
)
