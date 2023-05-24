def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


n = 1000  # onde n será o número total de elementos dentro do array
meu_array = list(range(1, n))

multiply_arrays(meu_array, meu_array)
