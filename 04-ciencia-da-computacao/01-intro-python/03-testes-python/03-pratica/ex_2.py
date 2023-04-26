def translate_to_number(word):
    if not 1 < len(word) <= 30:
        raise ValueError("expression should be at least one char")
    result = ""
    for letter in word:
        if letter in "ABC":
            result += "2"
        elif letter in "DEF":
            result += "3"
        elif letter in "GHI":
            result += "4"
        elif letter in "JKL":
            result += "5"
        elif letter in "MNO":
            result += "6"
        elif letter in "PQRS":
            result += "7"
        elif letter in "TUV":
            result += "8"
        elif letter in "WXYZ":
            result += "9"
        elif letter in "-01":
            result += letter
        else:
            raise ValueError("expression with invalid chars")
    return result
