def students_in_instant(entry, exit, targe_time):
    count = 0
    for i in range(len(entry)):
        if entry[i] <= targe_time <= exit[i]:
            count += 1
    return count


print(students_in_instant([1, 2, 3], [3, 2, 7], 4))

# ou de uma maneira mais pythonica
# def students_in_instant(arrivals, departures, time_instant):
#     return sum(
#         arrival <= time_instant <= departure
#         for arrival, departure in zip(arrivals, departures)
#     )