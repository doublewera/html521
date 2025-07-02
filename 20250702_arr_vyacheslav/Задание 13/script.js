/* 13. Дан массив имен студентов.
Вывести в консоль самое короткое имя */

let names = [
  'ПетроБродский',
  'СамуилГарсон',
  'ВанСаныч',
  'Дас',
  'ПетропавлоскаяКрепостьСт',
  'СамуилГарсон',
  'СанСаныч',
  'Вася',
  'НасмотренныйБрундук',
  'ВанСаныч']

//for (let i=0; i < names.length; i++){
// for (let i in names){
if (names.length == 0) {
    console.log('В пустом массиве нет самого короткого имени')
} else {
  let short = names[0]  // А вдруг первый элемент и есть самый короткий?
  for (let aname of names) {  // перебираем массив names по элементам. Каждый - aname
      console.log(aname)
      // Проверяем, не является ли очередной элемент короче уже ранее сохраненнного самого короткого
      // очередной элемент хранится в переменной      aname
      // самый короткий хранится в переменной         short
      if (aname.length < short.length) {
        short = aname
      }
      // b = a.reduce(
      //     (accumulator, currentValue) => accumulator + currentValue,
      //     initialValue
      //   );
      //console.log(b)
  }
  console.log('Самое короткое имя: ', short)
}