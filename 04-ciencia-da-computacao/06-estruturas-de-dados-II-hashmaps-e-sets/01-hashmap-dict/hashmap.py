class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


"""
Quando duas chaves após hash_function resultao no mesmo endereço,
chamamos isso de colisão. Ulizamos separate chaining para resolver.
os comentários abaixo são apenas para fins didáticos,
antes da implementação do separate chaining, não é necessário.
"""


class HashMap:
    def __init__(self):
        # self._buckets = [None for _ in range(10)]
        self._buckets = [[] for _ in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        # self._buckets[address] = employee
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        # return self._buckets[address].name
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_value):
        address = self.get_address(id_num)
        # self._buckets[address].name = new_value
        for item in self._buckets[address]:
            if item.id_num == id_num:
                item.name = new_value
                return True
        return False


if __name__ == "__main__":
    employees = [
        (14, "name1"),
        (23, "name2"),
        (10, "name3"),
        (9, "name4"),
        (24, "name5"),
    ]
    hashmap = HashMap()

    for id_num, name in employees:
        hashmap.insert(Employee(id_num, name))

    print(hashmap.get_value(23))
    print(hashmap.has(23))
    print(hashmap.has(24))
    print(hashmap.get_value(10))

    hashmap.update_value(10, "name30")

    print(hashmap.get_value(10))
    print(hashmap.get_value(14))
    print(hashmap.get_value(24))
    hashmap.update_value(24, "name33")
    print(hashmap.get_value(24))
