def is_odd(number):
    "Retorna True se um número é ímpar, senão False."
    return number % 2 != 0


def divide(a_number, other_number):
    "Retorna a divisão de a_number por other_number"
    return a_number / other_number


def get_most_ordered_dish_per_costumer(orders, customer):
    max_amount = 0
    most_ordered = ""
    customer_dishes = {}

    for order in orders:
        if order["customer"] == customer:
            customer_dishes[order["order"]] = (
                customer_dishes.get(order["order"], 0) + 1
            )
            if customer_dishes[order["order"]] >= max_amount:
                max_amount = customer_dishes[order["order"]]
                most_ordered = order["order"]
    return most_ordered


def get_order_frequency_per_costumer(orders, customer, order):
    counter = 0
    for current_order in orders:
        if (
            current_order["customer"] == customer
            and current_order["order"] == order
        ):
            counter += 1
    return counter
