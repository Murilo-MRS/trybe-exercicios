from linked_list_content import LinkedList


def delete_duplicates(linked_list):
    list_with_unique_elements = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements
