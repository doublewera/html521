import calc

operators = {
    '+': calc.add,
    '-': calc.sub
}

# calc.calculator(4, 2, )

while True:
    # + или - и два числа и все!
    # Может: 2424 + 23647
    # Не может: 78567 - 6 + 456
    user_request = input('Что посчитать? ')
    for op in operators:
        if op in user_request:
            a, b = user_request.split(op)  # 4+5 -> ['4', '5']
            a = float(a.strip())
            b = float(b.strip())
            res = calc.calculator(a, b, operators[op])
            print('Ваш ответ: ', res)