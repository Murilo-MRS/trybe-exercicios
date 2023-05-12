import requests

# 2 Faça uma requisição ao recurso usuários da API do Github
# (https://api.github.com/users), exibindo o username e url
# de todos os usuários retornados.
response_2 = requests.get("https://api.github.com/users")
for user in response_2.json():
    print(user["login"], user["url"])
