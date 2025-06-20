/**
 * Цикл: Продавец и покупатель торгуются на рынке.
 * Продавец изначально называет цену: 10000 за букет.
 * Покупатель 4000. 
 * На каждом витке цикла продавец уменьшает сумму на 500,
 *  а покупатель повышает на 600. 
 * За какую сумму будет куплен букет?
 */

let seller       = 10000;  // Начальная цена от продавца
let seller_minus = 500;
let buyer        = 4000;
let buyer_plus   = 600;

while (buyer < seller) {
    // console.log('продавец: - 10000!\nпокупатель: - 4000?')
    console.log('продавец: -', seller, '!\nпокупатель: -', buyer, '?')
    // Логика покупателя:
    let buyer_next = buyer + buyer_plus; // Вычислил, но вслух не сказал!
    buyer = buyer_next;             // buyer = buyer + buyer_plus
    let seller_next = seller - seller_minus; // продавец тоже поменял цену
    seller = seller_next;
}
console.log('Букет куплен за ', seller)
