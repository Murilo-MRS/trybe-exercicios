from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
# book representa um dado obtido na raspagem
book = {
    "title": "A Light in the Attic",
}
document_id = db.books.insert_one(book).inserted_id
print(document_id)
client.close()  # fecha a conexão com o banco de dados

client = MongoClient()
db = client.catalogue
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
db.books.insert_many(documents)
client.close()  # fecha a conexão com o banco de dados

# busca um documento da coleção, sem filtros
with MongoClient() as client:
    db = client.catalogue
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
#  Scrapy

# 🕷 Uma excelente e poderosa ferramenta para raspagem de dados é a Scrapy.
# Ela possui, em sua implementação, todos os mecanismos citados
# anteriormente e outros recursos adicionais.

# Vale a pena dar uma olhadinha! 😉
