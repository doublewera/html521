// Дан массив упорядоченных чисел [2, 4, 6, 7, 8, 14, 16, 18]
//  найти, есть ли в массиве число из поля ввода на странице бинарным поиском

function search() {
    const chislo = me.valueAsNumber // Что ищем?
    // Найти, на какой позиции оно стоит!
    //         0  1  2  3  4   5   6   7
    let arr = [2, 4, 6, 7, 8, 14, 16, 18]
    let left = 0
    let right = arr.length - 1       // 7
    let middle = -1
    while (right - left > 1) {
        // Ищем середину той части массива, которую сейчас анализируем - среднее арифметическое
        middle = Math.floor((right + left) / 2)
        if (chislo < arr[middle]) {
            // ищем в левой половине - сдвигаем правый край левее середины
            right = middle - 1
        } else {
            // ищем в правой половине - сдвигаем левый край до середины
            left = middle
        }
        console.log(left, right)
    }
}
