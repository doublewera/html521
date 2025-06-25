console.log('Скрипт подключен')
/**
 * 1. Создать ряд
 * 2. Прикрепить ряд к таблице
 * 3. Создать ячейку
 * 4. Прикрепить ячейку к РЯДУ
 * 5. В ячейке написать 2*2=4
 * 6. Сделать ряд ячеек с числами от 1 до 9
 */
// 1. Создать ряд
let tr = document.createElement('tr')  // Внутри название элемента, который мы создаем
// 2. Прикрепить ряд к таблице
// КУДА присоединяем ЧТО
multbl.appendChild(   tr)
// к таблице по айдишнику присоединяем свежесозданный ряд
const max_num = 9
header.setAttribute('colspan', max_num)
let index = 1
while (index <= max_num) {
    // ПОВТОРЯТЬ, ПОКА НЕ ДОСТИГНЕМ 9
    // 3. Создать ячейку
    let td = document.createElement('td')
    // 4. Прикрепить ячейку к РЯДУ
    tr.appendChild(td)
    // 5. В ячейке написать 1
    td.textContent = index
    index++
}