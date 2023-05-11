from parsel import Selector
import requests

# URL_BASE = "http://books.toscrape.com/catalogue/"

# response = requests.get(URL_BASE + "page-1.html")
# selector = Selector(text=response.text)

# href = selector.css(".product_pod h3 a::attr(href)").get()
# detail_page_url = URL_BASE + href

# # baixa o conteúdo da página de detalhes
# detail_response = requests.get(detail_page_url)
# detail_selector = Selector(text=detail_response.text)

# # recupera a descrição do produto
# # ~ significa a tag irmã
# description = detail_selector.css("#product_description ~ p::text").get()
# print(description)

# # limpa tag preco com dados inndesejados
# response = requests.get("http://books.toscrape.com/")
# selector = Selector(text=response.text)
# # Extrai todos os preços da primeira página
# prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
# print(prices)

# limpa o more da descrição do produto
response = requests.get(
    "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
)
selector = Selector(text=response.text)

# Extrai a descrição
description = selector.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]
print(description)
