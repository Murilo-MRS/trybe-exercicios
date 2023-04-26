def name_printer(string):
    for row in string:
        print(f"{row}")
    print()


if __name__ == "__main__":
    name = input("What's your name? ")

    name_printer(name)
