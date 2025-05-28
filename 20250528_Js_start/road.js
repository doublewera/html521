/**
 * От моего дома до академии ТОП 53 километра 
 * на машине или 60 км пешком. Занятия начинаются 
 * в 19.5 вечера. Во сколько мне надо выйти, чтобы 
 * успеть на занятия пешком со скоростью 5 км / ч или
 * на машине со СРЕДНЕЙ скоростью 20 км/ч?
 * 
 * 
 *ПАРАМ
 
 *  * От моего дома до академии ТОП car_distance километра 
 * на машине или on_foot_distance км пешком. Занятия начинаются 
 * в lesson_start вечера. Во сколько мне надо выйти 
 * car_out, foot_out, чтобы 
 * успеть на занятия пешком со скоростью foot_speed км / ч или
 * на машине со СРЕДНЕЙ скоростью car_speed км/ч?
 */

 let car_distance = 53;
 let on_foot_distance = 60;
 let lesson_start = 19.5;
 let foot_speed = 5;
 let car_speed = 20;
 // Время на дорогу!
 let time_car = car_distance / car_speed;
 let time_foot = on_foot_distance / foot_speed;
// Время выхода - это время урока минус время на дорогу
let car_out = lesson_start - time_car;
let foot_out = lesson_start - time_foot;

console.log('На машине выйти в ', car_out, ' часов а пешком в ', foot_out);
