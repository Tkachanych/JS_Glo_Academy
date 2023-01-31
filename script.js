'use strict';

const title = prompt('Как называется Ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные');
const screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'));
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = parseFloat(prompt('Сколько это будет стоить?'));
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = parseFloat(prompt('Сколько это будет стоить?'));

const rollback = 15;

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

//Расчёт скидки.
const discount = function(price) {
  if (price > 30000)
    return 'Даем скидку в 10%';
  if (price > 15000)
    return 'Даем скидку в 5%';
  if (price >= 0)
    return 'Скидка не предусмотрена';
  return 'Что-то пошло не так.';
};

//Весь функционал, что был ранее оставляем
console.log('servicePercentPrice = ' + servicePercentPrice);
console.log(discount(fullPrice));
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback / 100));