name = input("What's your name? ")


def name_printer(string):
    for row in string:
        print(f"{row}")


name_printer(name)

numbers_list = input("Insira valores aqui, separados por espaço: ")


def sum_nums(nums):
    nums_arr = nums.split(" ")
    sum = 0

    for num in nums_arr:
        if not num.isdigit():
            print(f"Erro ao somar valores, {num} não é um dígito.")
        else:
            sum += int(num)

    print(f"A soma dos valores válidos é: {sum}")


sum_nums(numbers_list)
