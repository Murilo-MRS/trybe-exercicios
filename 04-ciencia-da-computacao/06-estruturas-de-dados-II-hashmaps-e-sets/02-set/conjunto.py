class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def difference(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def issubset(self, conjunto_b):
        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                return False

        return True

    def issuperset(self, conjunto_b):
        for index in range(1001):
            if conjunto_b.set[index] and not self.set[index]:
                return False

        return True

    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string


# if __name__ == "__main__":
#     conj = Conjunto()
#     for i in [0, 10, 100, 1000]:
#         conj.add(i)
#     print(conj)
#     print(1 in conj)
#     print(0 in conj)

#     conj2 = Conjunto()
#     for i in [1, 2, 3]:
#         conj2.add(i)
#     print(conj2)

#     conj3 = Conjunto()
#     for i in [7, 2, 10]:
#         conj3.add(i)
#     print(conj3)

#     conj4 = Conjunto()
#     print(conj4)

#     conj5 = conj2.union(conj3)
#     print(conj5)

#     conj6 = conj2.intersection(conj3)
#     print(conj6)

#     conj1 = Conjunto()
#     for i in [1, 2, 3]:
#         conj1.add(i)

#     conj2 = Conjunto()
#     for i in [7, 2, 10]:
#         conj2.add(i)

#     conj3 = Conjunto()
#     conj4 = conj1.union(conj2)

#     print(conj1.issubset(conj4))
#     print(conj4.issuperset(conj1))
#     print(conj3.issubset(conj4))
