'use strict';

let title = prompt('Как называется Ваш проект?');

let screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные');
let screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?', 2500)) || 0;

let rollback = 15;
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseFloat(prompt('Сколько это будет стоить?')) || 0;

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = parseFloat(prompt('Сколько это будет стоить?')) || 0;

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);

//Расчёт скидки.
let discount = 'Скидка не предусмотрена';

switch(true) {
  case fullPrice > 30000:
    discount = 'Даем скидку в 10%';
    break;
  case fullPrice > 15000:
    discount = 'Даем скидку в 5%';
    break;
  case fullPrice >= 0:
    break;
  default: discount = 'Что-то пошло не так.'
}
console.log(discount);

//Весь функционал, что был ранее оставляем
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback / 100));