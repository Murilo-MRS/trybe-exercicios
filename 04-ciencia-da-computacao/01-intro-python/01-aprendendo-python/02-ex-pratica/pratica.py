def great_number(a, b):
    if b > a:
        return b
    return a


def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


def draw_square(n):
    for row in range(n):
        print(n * "*")


def most_character_count(list):
    biggest = ""
    for name in list:
        if len(name) > len(biggest):
            biggest = name
    return biggest


def paint_costs(area):
    area_per_liter = area / 3
    cans = area_per_liter / 18
    price = cans * 80
    return (f'qtd de latas: {cans:.2f}', f'valor: R$ {price:.2f}')


def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
