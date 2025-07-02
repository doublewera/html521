/* 10. Заменить все числа, которые делятся на 3, на -1 */

let a = []

for (let i = 0; i < 1000; i++){
    a.push(i)
}

// for (let i=0; i < a.length; i++) {
for (let i in a) {  // for ... in Перебирает позиционный массив по номерам позиций
    if (a[i] % 3 == 0) {
        a[i] = -1
        console.log(-1)
    } else {
        console.log(i)
    }
}