import requests

# 1 Faça uma requisição ao site https://httpbin.org/encoding/utf8
# e exiba seu conteúdo de forma legível.
response_1 = requests.get("https://httpbin.org/encoding/utf8")
print(response_1.text)
