class TV:
    def __init__(self, tamanho):
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.__ligada = False

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def aumentar_volume(self):
        if not self.__ligada:
            raise ValueError("TV está desligada")
        if self.volume < 100:
            self.volume += 1
        else:
            self.volume = 99

    def diminuir_volume(self):
        if not self.__ligada:
            raise ValueError("TV está desligada")
        if self.volume > 0:
            self.volume -= 1
        else:
            self.volume = 1

    def modificar_canal(self, canal):
        if not self.__ligada:
            raise ValueError("TV está desligada")
        if canal < 1 or canal >= 100:
            raise ValueError("Canal inválido")
        self.canal = canal

    def __str__(self):
        return (
            f"TV {self.tamanho} polegadas, som no volume {self.volume}"
            f" e canal {self.canal}"
            f" e ligada: {self.__ligada}"
        )


tv = TV(42)
tv.ligar_desligar()
tv.aumentar_volume()
tv.aumentar_volume()
tv.ligar_desligar()
tv.ligar_desligar()
tv.aumentar_volume()
tv.modificar_canal(1)
tv.ligar_desligar()

print(tv)
