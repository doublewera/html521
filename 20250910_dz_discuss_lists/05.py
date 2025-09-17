# https://docs.google.com/presentation/d/1h72hyzzi679AA80qJLW67oE-MjxW9gH1lLjG_X3R-TQ

# > С помощью среза и range двумя способами вывести три последних слова текста

text = 'Печатаю   текст, что бы    порубать    срезом'
strlist = text.split()
print(strlist[-3:])
# print(text[:2:-1])

# for i in range(len(text)):
#     # print(text[i])
#     # print(list(range(i)))
#     print(text[5])

# print(range(len(text)))
#yet = range(len(text))
#print(range)
# range(len.last, len-3, -1)
