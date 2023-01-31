'use strict';

let title = prompt('Как называется Ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные');
let screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'));
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseFloat(prompt('Сколько это будет стоить?'));
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = parseFloat(prompt('Сколько это будет стоить?'));
let rollback = 15;

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

//Функция возвращает сумму всех дополнительных услуг.
const getAllServicePrices = function(price1, price2) {
  return price1 + price2;
}

//Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг
function getFullPrice(price1, price2) {
  return price1 + price2;
}

//Расчёт скидки.
const getRollbackMessage = function(price) {
  if (price > 30000) return 'Даем скидку в 10%';
  if (price > 15000) return 'Даем скидку в 5%';
  if (price >= 0) return 'Скидка не предусмотрена';
  return 'Что-то пошло не так.';
}

//Функция возвращает строку: первый символ с большой буквы, остальные с маленькой.
const getTitle = function(string) {
  let str = string.trim().toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//Функция возвращает итоговую стоимость за вычетом процента отката
const getServicePercentPrices = function(price, rollback) {
  return Math.ceil(price - (price * (rollback / 100)));
}

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(', '));
console.log(servicePercentPrice);
console.log(getTitle(title));
console.log(getRollbackMessage(fullPrice));