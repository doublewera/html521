def congratulations_letter(
        name,
        fathername,
        anniversary):  #  сигнатура - заголовок
    return f'''Здравствуйте, {name} {fathername}!
        Поздравляем Вас с {anniversary} и желаем здоровья и счастья!
        С уважением и любовью, Ваши Друзья!
    '''

# Вызвать функцию с неподобающим количеством параметров
try:
    congratulations_letter()
except:
    import traceback  # импорт полезного модуля, который помогает обрабатывать ошибки
    traceback.print_exc()

my_letter = congratulations_letter(
    'Вера',
    'Олеговна',
    'именинами'
)
print(my_letter)
def congratulations_letter(
        name,
        fathername,
        anniversary):  #  сигнатура - заголовок
    return f'''Здравствуйте, {name} {fathername}!
        Поздравляем Вас с {anniversary} и желаем здоровья и счастья!
        С уважением и любовью, Ваши Друзья!
    '''

# Передача аргументов по позиции - питон читает аргументы 
# (присваивает им значения) в том же порядке, в котором они переданы
print(congratulations_letter(
    38,
    'попугаев',
    ' кукурузой '
))

# Передача аргументов по имени - теперь не требуется соблюдать порядок аргументов!
slava_letter = congratulations_letter(
    anniversary='Рождеством и Новым годом',
    fathername='Васильевич',
    name='Вячеслав',
)
print(slava_letter)

# Смешанная передача аргументов и её ограничения:

# Нельзя передавать позиционные аргументы ПОСЛЕ именных.
# anna_letter = congratulations_letter(
#     name='Анна',
#     anniversary=' Днём Учителя',  # Oooook, праздник - понял
#     'Викторовна'                  # Таки, что? это праздник, потому что он третий или?
# )

# Нельзя давать одно значение двумя способами
# anna_letter = congratulations_letter(
#     'Анна',                       # Первый аргумент - имя
#     anniversary=' Днём Учителя',  # Oooook, праздник - понял
#     name='Анна '                  # Таки, что? это праздник, потому что он третий или?
# )
#TypeError: congratulations_letter() got multiple values for argument 'name' 

# сначала все позиционные, потом - именные
anna_letter = congratulations_letter(
    'Анна',                       # Первый аргумент - имя
    anniversary=' Днём Учителя',  # Oooook, праздник - понял
    fathername='Викторовна'       # Договорились, записал отчество
)


# Опциональные аргументы - имеют предустановленные значения


def birthday(name,
            fathername=', очень рады будем Вашему ответу'):
    return f'''Здравствуйте, {name} {fathername}!
    Поздравляем Вас с Днем Рождения!
    Ваши коллеги
'''

print(birthday('Иван', 'Петрович'))
print(birthday('Иван'))

from math import sqrt  # Модуль можно импортировать частично - только нужные функции
def vector_length(x, y, z=0):
    return sqrt(x * x + y * y + z * z)

print(vector_length(3, 4))  # z не передан и будет нулем
print(vector_length(3, 4, 12))


# Неограниченные позиционные аргументы

# Похоже на js arguments
def how_many_fruit_did_i_buy(*fruit):
    return len(fruit)

print(
    'Сколько фруктов я купила? ',
    how_many_fruit_did_i_buy('apple', 'strawberry'))

# Неограниченное количество именных аргументов:

# посчитаем сумму за покупки
def my_bag(**things):  # {'apple': 100}
    result = 0
    for key in things:
        print(key, things[key])
        result += things[key]
    return result

print(my_bag(apple=100, strawberry=250))

