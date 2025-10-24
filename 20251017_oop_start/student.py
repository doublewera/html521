from datetime import datetime

class Student:
    def __init__(self, name):
        self.__name = name
        self.__marks = [5, 3, 4]

    def get_name(self):
        return self.__name

    def set_name(self, new_name):
        if not isinstance(new_name, str):
            raise TypeError(
                'Имя должно быть строкой, а не ' + str(type(new_name)))
        self.__name = new_name

    name = property(get_name, set_name)

    def get_marks(self):
        # return list(tuple(self.__marks))
        return self.__marks[:]
# Сделать сеттеры и геттеры для имени и оценок

s = Student('Vasya')
m = s.get_marks()
print(m)
#m.append(5)
#print(s.get_marks())

print(s.name)
s.name = '78'
print(s.name)