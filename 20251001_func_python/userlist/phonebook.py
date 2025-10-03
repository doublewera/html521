import users

def menu():
    print("\n=== Управление пользователями ===\n")
    variants = [
        "Добавить пользователя",
        "Удалить пользователя",
        "Показать список пользователей",
        "Выйти"]
    for i, variant in enumerate(variants):
        print("    ", i + 1, variant)
    print()  # last line spacing
    choice = 0
    while not (choice in [str(i + 1) for i in range(len(variants))]):
        choice = input("Выберите действие (1-4): ")
    return int(choice) - 1

def add(all_users):
    name = input("Введите имя пользователя: ")
    try:
        age = int(input("Введите возраст пользователя: "))
        users.add_user(all_users, name, age)
        print(f"Пользователь {name} успешно добавлен.")
    except ValueError as e:
        print(f"Ошибка: {e}")

def delete(all_users):
    name = input("Введите имя пользователя для удаления: ")
    try:
        users.remove_user(all_users, name)
        print(f"Пользователь {name} успешно удалён.")
    except ValueError as e:
        print(f"Ошибка: {e}")

def main():
    all_users = {}
    funcs = [add, delete, users.list_users, lambda a: None]
    choice = -1
    while choice != 3:
        choice = menu()
        funcs[choice](all_users)
    print("Выход из программы.")

if __name__ == "__main__":
    main()
