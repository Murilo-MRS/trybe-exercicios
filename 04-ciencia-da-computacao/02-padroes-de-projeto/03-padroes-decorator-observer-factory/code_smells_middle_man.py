class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        # return Game(game_id).tournaments()
        return Tournament.query.filter(game_id=game_id, user_id=self.id).all()

# A classe Game, especificamente neste exemplo onde ela não possui
# mais métodos ou atributos,

# class Game:
#     """Classe que só possui o método de filtrar os torneios"""
#     def __init__(self, game_id):
#         self.game_id = game_id

#     def tournaments(self):
#         return Tournament.query.filter(game_id=self.game_id).all()


class Tournament:
    """Classe contendo vários métodos e que herda de algum banco de dados"""


# Código cliente
player = Player(id=1)
print(player.tournaments(1))
