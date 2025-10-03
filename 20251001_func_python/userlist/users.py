def add_user(users, name, age):
    if not isinstance(age, int) or age <= 0:
        raise ValueError("Возраст должен быть положительным целым числом.")
    if name in users:
        raise ValueError(f"Пользователь с именем {name} уже существует.")
    users[name] = age

def remove_user(users, name):
    if name not in users:
        raise ValueError(f"Пользователь с именем {name} не найден.")
    del users[name]

def list_users(users):
    print("Список пользователей", end='')
    if not users:
        print("пуст.")
        return
    print(':')
    for name, age in users.items():
        print(f"Имя: {name}, Возраст: {age}")
