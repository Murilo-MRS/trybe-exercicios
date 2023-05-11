from abc import ABC, abstractmethod

VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message):
        return message


class LogWarning:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{LARANJA}{self.log.dispara_log(message)}{RESET}"


class LogError:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{self.log.dispara_log(message)}{RESET}"


class LogSuccess:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{self.log.dispara_log(message)}{RESET}"


logger = Log()
print(LogSuccess(logger).dispara_log("O sistema esta funcionando"))
print(LogWarning(logger).dispara_log("O sistema esta lento"))
print(LogError(logger).dispara_log("O sistema esta com erros"))


# 2


class Alarme:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotinas(self, rotina):
        self.__rotinas.append(rotina)

    def acionar_todas_rotinas(self):
        for rotina in self.__rotinas:
            rotina.acionar()

    def despertar(self):
        print("Som do alarme: Triiiiiiim, Triiiiiiim")
        self.acionar_todas_rotinas()


# Interface Observer
class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        pass


# Observador Rotina Luzes
class AcionadorLuzes(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Acendendo as Luzes")


# Observador Cafeteira
class AcionadorCafeteira(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Preparando o café")


# Observador Computador
class AcionadorComputador(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Ligar computador")


# Cliente
if __name__ == "__main__":
    alarme_manha = Alarme()
    AcionadorLuzes(alarme_manha)
    AcionadorCafeteira(alarme_manha)
    AcionadorComputador(alarme_manha)

    alarme_manha.despertar()

    alarme_tarde = Alarme()
    AcionadorCafeteira(alarme_tarde)

    alarme_tarde.despertar()


# 3
class SystemAccess(ABC):
    @abstractmethod
    def __init__(self, can_access=False):
        pass

    def set_permission(self, can_access):
        pass


class SupportSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "Support"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class FinanceSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "Finance"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class SalesSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "Sales"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class Account(ABC):
    def __init__(self, username):
        self.username = username
        self.permissions = []
        self.create_account()

    @abstractmethod
    def create_account():
        pass

    def show_permissions(self):
        permissions_names = [
            permission.name for permission in self.permissions
        ]
        return permissions_names

    def add_permissions(self, permission):
        self.permissions.append(permission)


class SupportAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess(True))


class ManagerAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess(True))
        self.add_permissions(FinanceSystemAccess(True))
        self.add_permissions(SalesSystemAccess(True))


class SupportSalerAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess(True))
        self.add_permissions(SalesSystemAccess(True))


# ...

if __name__ == "__main__":
    print("Qual o nome da pessoa que deseja criar?")
    name = input()
    print("Escolha qual código do perfil que deseja criar:")
    account_type = input(
        "\n1 - Suporte\n2 - Gerente\n3 - Vedendas & Suporte\n"
    )
    if account_type == "1":
        account = SupportAccount(name)
    elif account_type == "2":
        account = ManagerAccount(name)
    elif account_type == "3":
        account = SupportSalerAccount(name)

    print(f"\nCriando a conta para {account.username}.")
    print(f"Acesso liberado para os sistemas: {account.show_permissions()}")


# 4
class Order:
    def __init__(self, items, credit_card):
        self.items = items
        self.credit_card = credit_card


class CreditCard:
    def __init__(self, name, number, month, year, security_code):
        self.name = name
        self.number = number
        self.month = month
        self.year = year
        self.security_code = security_code
