def good_pairs(numbers):
    count = 0
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            if numbers[i] == numbers[j]:
                count += 1
    return count


print(good_pairs([1, 3, 1, 1, 2, 3]))
