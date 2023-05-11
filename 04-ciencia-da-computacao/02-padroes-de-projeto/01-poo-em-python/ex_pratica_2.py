from collections import Counter


class Estatistica:
    def __init__(self, numbers: list):
        self.__numbers = numbers

    def media(self):
        # return format 2 decimal places
        return round(sum(self.__numbers) / len(self.__numbers), 2)

    def mediana(self):
        sorted_numbers = sorted(self.__numbers)
        if len(sorted_numbers) % 2 == 0:
            return (
                sorted_numbers[len(sorted_numbers) // 2]
                + sorted_numbers[len(sorted_numbers) // 2 - 1]
            ) / 2
        else:
            return sorted_numbers[len(sorted_numbers) // 2]

    def moda(self):
        number, _ = Counter(self.__numbers).most_common()[0]

        return number


estatistica = Estatistica([1, 2, 8, 3, 9, 1, 32, 34, 53, 234, 65])
print(f"MEDIA: {estatistica.media()}")
print(f"MEDIANA: {estatistica.mediana()}")
print(f"MODA: {estatistica.moda()}")
