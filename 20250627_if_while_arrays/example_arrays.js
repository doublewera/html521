    const subjects = ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'DbT', 'Django', 'Telegram-Bot']
    console.log('Первый предмет: ', subjects[0])
    console.log('Самый сложный предмет: ', subjects[6])

    const school_marks = [2, 3, 4, 5]
    console.log('Лучшая оценка: ', school_marks[3])

    let favourite_holidays = [
        new Date(2025, 11, 31),
        new Date(2025, 8, 1),
        new Date(2025, 7, 6)
    ]

    const breakfast = ['coffe', 'croissant']
    breakfast[1] = 'Печенье'
    console.log(breakfast)

    const cars = [
        'BMW', 
        'Mercedes', 
        'Lada', 
        'Renault',
        'Alpha',
        'Limuzin',
        'VAZ',
        'Citroen'
    ]
    let index = 0
    while(index < cars.length) {
        console.log(cars[index])
        index ++
    }

//             0  1  2  3  4  5  6  7  8  9           
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
let i = 1
while(i < 10) { 
    array[i] *= 100;
    console.log(array[i])
    i += 2
}