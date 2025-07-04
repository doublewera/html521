let arr = [2, 4, 6, 8, 333, 55, 77]
let brr = [2, 4, 6, 8, 333, 55, 77]
let crr = [2, 4, 66]

// Проверить, равны ли массивы arr, brr

let areEqual = arr.length == brr.length
// Установим предполагаемое равенство массивов как равенство их длин

if (areEqual) {
    let i = 0  // начнем сравнение с первого элемента
    while((i < arr.length) && (arr[i] == brr[i])) {
        // Пока не достигли конца массивов и пока элементы равны
        i++
    }
    areEqual = i == arr.length   // достигли ли мы конца массива?
    
}

console.log(areEqual);

// Проверить, равны ли массивы arr, crr



let my_car = {
    speed: 97,         // km /h
    color: 'red',
}
let your_car = {
    speed: 97,         // km /h
    color: 'red',
}
let bus = {
    speed: 43,         // km /h
    color: 'red',
}

//  Проверить, равны ли моя и твоя машины
areEqual = true
for (let i in arr) {
    if (arr[i] !== brr[i]) {
        areEqual = false;
        break;  // досрочный выход из цикла. Не рекомендован для ежедневного использования
    }
}


// Проверить, равна ли моя машина автобусу