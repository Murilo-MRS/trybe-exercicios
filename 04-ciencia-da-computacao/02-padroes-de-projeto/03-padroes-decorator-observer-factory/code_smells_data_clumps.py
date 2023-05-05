# Ocorre quando um grupo de variáveis
# (como o endereço de entrega do exemplo que veremos abaixo)
# é passado junto como parâmetro em várias partes do programa.
# É indicativo de que esses grupos devam ser transformados
# em suas próprias classes.

# os parâmetros street, number e district ficaram repetidos,
# ao juntar todos eles temos um endereço.

# class User:
#     def __init__(self, name, age, street, number, district):
#         self.name = name
#         self.age = age
#         self.address_street = street
#         self.address_number = number
#         self.address_district = district

# ...


# Em algum outro lugar do código
# class Company:
#     def __init__(self, name, street, number, district):
#         self.name = name
#         self.address_street = street
#         self.address_number = number
#         self.address_district = district


# ...
# REFACTORING
class Address:
    def __init__(self, street, number, district):
        self.street = street
        self.number = number
        self.district = district


class User:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address


class Company:
    def __init__(self, name, address):
        self.name = name
        self.address = address


"""
from dataclasses import dataclass


@dataclass
class Address:
    # Podemos colocar um valor padrão
    street = "Street"
    number = 0
    # Ou especificar o tipo do campo com anotações de tipo
    district: str


address = Address(district="District")

print(address.street, address.number, address.district)
# Street 0 District
OU

@dataclass
class Address:
    street: str
    number: int
    district: str


# A ordem de parâmetros pro construtor é a mesma da definição dos atributos
address = Address("Street", 0, "District")

"""
