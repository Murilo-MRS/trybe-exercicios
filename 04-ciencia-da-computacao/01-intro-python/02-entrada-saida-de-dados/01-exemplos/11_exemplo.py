recovery_students = []
with open("file.txt") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recovery_students.append(student_grade[0] + "\n")
print(grades_file.closed)
grades_file.close()

with open("recuStudents.txt", mode="w") as recu_students_file:
    print(recovery_students)
    recu_students_file.writelines(recovery_students)
print(recu_students_file.closed)
recu_students_file.close()

# file.txt
# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5
