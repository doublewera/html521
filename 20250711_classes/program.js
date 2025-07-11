class Human {
    #firstname                   // приватное поле
    #birthday                    // поле
    constructor(newname, dt) {  // метод
        this.#firstname = newname  // 'Вася'
        this.#birthday = dt        // new Date(2000, 5, 2)
    }
    get name() {  // getter - обращение без круглых скобок!
        return this.#firstname
    }
}

let man = new Human('Вася', new Date(1990, 2, 4))
let girl = new Human('Ася', new Date(1993, 6, 4))
let boy = new Human('Дима', new Date(2019, 10, 18))
// girl.#firstname = 'Миша' - нельзя! Поле приватное!
console.log(girl.name)