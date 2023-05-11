import requests

# Por 10 segundos não temos certeza se a requisição irá retornar
# response = requests.get("https://httpbin.org/delay/10")

try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)
