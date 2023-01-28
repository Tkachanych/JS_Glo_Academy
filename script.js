'use strict';

let title = 'JS_Glo_Academy';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 2500;
let rollback = 15;
let fullPrice = 500000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback / 100));