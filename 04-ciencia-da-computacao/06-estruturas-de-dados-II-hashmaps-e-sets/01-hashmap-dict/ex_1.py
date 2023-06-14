def score(subordinates, person):
    this_score = 1

    for subordinate in subordinates[person]:
        this_score += score(subordinates, subordinate)

    return this_score


# if __name__ == "__main__":
#     subordinates = {
#         1: [2, 3],
#         2: [4],
#         3: [],
#         4: [5, 6],
#         5: [7],
#         6: [],
#         7: [],
#     }

#     print(score(subordinates, 1))
#     print(score(subordinates, 2))
#     print(score(subordinates, 3))
#     print(score(subordinates, 4))
#     print(score(subordinates, 5))
#     print(score(subordinates, 6))
#     print(score(subordinates, 7))


# FOLLOW-UP 1 - tornando a busca mais eficiente, usando hashmaps
# Se você calcular para a pessoa 1, você concorda que
# teremos que calcular o score de todas as pessoas da
# empresa? O que podemos fazer é guardar os scores em
# uma outra hash para uso futuro. Poderíamos modificar
# a função score para receber essa estrutura e fazer a consulta
# de se aquele score já foi calculado antes. Mas essa estrutura
# auxiliar é parte do cálculo dos scores e não faz sentido que ela
# fique solta na main. Então vamos envelopar isso tudo dentro de uma classe.
# class Hierarchy:
#     def __init__(self, subordinates):
#         self.subordinates = subordinates
#         self.scores = {}

#     def get_score(self, person):
#         if person in self.scores:
#             print("Já calculei esse score antes - APENAS didático")
#             return self.scores[person]

#         this_score = 1

#         for subordinate in self.subordinates[person]:
#             this_score += self.get_score(subordinate)
#         self.scores[person] = this_score

#         return this_score


# if __name__ == "__main__":
#     subordinates = {
#         1: [2, 3],
#         2: [4],
#         3: [],
#         4: [5, 6],
#         5: [7],
#         6: [],
#         7: [],
#     }

#     hierarchy = Hierarchy(subordinates)

#     print(hierarchy.get_score(1))
#     print(hierarchy.get_score(2))
#     print(hierarchy.get_score(3))
#     print(hierarchy.get_score(4))
#     print(hierarchy.get_score(5))
#     print(hierarchy.get_score(6))
#     print(hierarchy.get_score(7))


# FOLLOW-UP 2 e 3 - adiconando um nova pessoa na hierarquia e recalculando

class Hierarchy:
    def __init__(self, k):
        self.subordinates = {}
        self.scores = {}
        self.k = k

    def add_person(self, boss, person):
        if not boss:
            self.subordinates[person] = []
            self.scores[person] = 1
            return

        self.scores[boss] += 1

        if len(self.subordinates[boss]) < self.k:
            self.subordinates[boss].append(person)
            self.subordinates[person] = []
            self.scores[person] = 1
        else:
            self.add_person(self.subordinates[boss][0], person)

    def get_score(self, person):
        return self.scores[person]


if __name__ == "__main__":
    hierarchy = Hierarchy(2)
    hierarchy.add_person(None, 1)
    hierarchy.add_person(1, 2)
    hierarchy.add_person(1, 3)
    hierarchy.add_person(2, 4)
    hierarchy.add_person(4, 5)
    hierarchy.add_person(4, 6)
    hierarchy.add_person(5, 7)
    print("\nAntes das novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}")

    hierarchy.add_person(4, 8)
    hierarchy.add_person(4, 9)
    print("\nApós novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}\n")
