// 7.
// задание: дана строка let mystr = 'nice'. Вывести в консоль (циклом): первая - n, вторая - i, третья -
// c, четвертая - e

let word_index = ['первая', 'вторая', 'третья', 'четвертая']
let mystr = 'nice'
for (i=0; i < mystr.length; i++) {
    letter = mystr[i]
    console.log(word_index[i], letter)
}