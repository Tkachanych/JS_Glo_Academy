'use strict';

let title = prompt('Как называется Ваш проект?');

let screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные');
let screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?', 2500)) || 0;

let rollback = 15;
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = service1 
                  ? parseFloat(prompt('Сколько это будет стоить?')) || 0 
                  : 0;

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = service1 
                  ? parseFloat(prompt('Сколько это будет стоить?')) || 0 
                  : 0;

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log('servicePercentPrice = ' + servicePercentPrice);

//Расчёт скидки.
const discount = (() => {
  if (fullPrice > 30000)
    return 'Даем скидку в 10%';
  if (fullPrice > 15000)
    return 'Даем скидку в 5%';
  if (fullPrice >= 0)
    return 'Скидка не предусмотрена';
  return 'Что-то пошло не так.';
})();
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