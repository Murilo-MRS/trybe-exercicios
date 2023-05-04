from abc import ABC, abstractmethod

"""
PROBLEMA:
Depois de que o relatório é processado, costumamos
emitir uma ordem de cobrança bancária para cada
cliente que possui débito automático. Temos um código
que realiza a comunicação com as principais instituições
bancárias. Mas é frequente um dos bancos alterar a Api deles
e nosso código para de funcionar, derrubando o sistema para todo mundo. 😕 
"""


class DebitoAutomatico:
    @classmethod
    def debitar(self, conta, valor, banco):
        if banco == "itau":
            # Codigo específico do Itaú (exemplo)
            # connect_server_udp(itau_line)
            # itau_line.check_system()
            # itau_zig_zag(valor, 'Token 454')
            print("Débito realizado pelo Itau")
        elif banco == "Santander":
            # Codigo específico do Santander (exemplo)
            # connect_server_tcp(santander_line)
            # santander_line.check_ping()
            # metodo_106(valor)
            print("Santander, Débito efetuado!")
        elif banco == "Bradesco":
            # Codigo específico do Bradesco (exemplo)
            print("Sucesso!")
        # ... + 150 bancos...
        elif banco == "Caixa":
            # Codigo específico da Caixa (exemplo)
            print("Efetuado com sucesso, Caixa Agradece!")


# DebitoAutomatico.debitar(120, 123, "itau")
# DebitoAutomatico.debitar(110, 456, "Santander")
# DebitoAutomatico.debitar(120, 789, "Bradesco")


# 1 REFATORACAO
class BancoStrategy(ABC):  # Interface
    @classmethod
    @abstractmethod
    def debitar(cls):
        raise NotImplementedError


class ItauStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Itau (exemplo)
        print("Débito realizado pelo Itau")


class SantanderStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Santander (exemplo)
        print("Santander, Débito efetuado!")


class BradescoStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Bradesco (exemplo)
        print("Sucesso!")


# ... métodos para todos os bancos

# CADA CLASSE EM UN ARQUIVO SEPARADO
# from itau_strategy import ItauStrategy
# from santander_strategy import SantanderStrategy
# from bradesco_strategy import BradescoStrategy


class Banco:
    def __init__(self, banco_strategy):
        self.__banco_strategy = banco_strategy

    def debitar(self, conta, valor):
        self.__banco_strategy.debitar(conta, valor)


Banco(ItauStrategy).debitar(120, 123)
Banco(SantanderStrategy).debitar(110, 456)
Banco(BradescoStrategy).debitar(120, 789)
