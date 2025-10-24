from datetime import datetime

class Student:
    def __init__(self, name):
        self.__name = name
        self.__marks = []

# Сделать сеттеры и геттеры для имени и оценок