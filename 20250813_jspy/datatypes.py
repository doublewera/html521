# Логический тип
b = False  # Создана логиеческая переменная со значением "Ложь"
if b:  # ветвление. Требует отступа последующих строк, относящихся к его ветвям
    print('b истинна')  # вывод на экран
else:
    print('b ложна')
print(type(b))

vocabulary = {  # dict. Такой же, как в js, но без обращения через точку
    'cat': 'кошка'
}
# Обращение по ключу на чтение
print('cat переводится как ', vocabulary['cat'])
# Обращение по ключу на запись
vocabulary['dog'] = 'пес'
print(vocabulary)
vocabulary['cat'] = 'кот'
print(vocabulary)

#  Числа
price = 100
height = 8124.534
print('тип price: ', type(price))
print('тип height: ', type(height))