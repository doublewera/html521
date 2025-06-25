/**
 * Вывести в консоль в столбик все натуральные числа,
 * которые меньше 100 и делятся нацело на 3: 3, 6, ... 99
 */
let chislo = 3;
const step = n;
while (chislo < 100) {
    console.log(chislo)
    chislo = chislo + step  
}