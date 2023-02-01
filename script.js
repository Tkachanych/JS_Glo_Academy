'use strict';

let title
let screens
let screenPrice
let adaptive
let rollback = 15;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {
  return isNaN(num);
}

const asking = function () {
  title = prompt('Как называется Ваш проект?', 'Калькулятор вёрстки');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

  do {
    screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'));
  } while (isNumber(screenPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?');
}

//Функция возвращает сумму всех дополнительных услуг.
const getAllServicePrices = function () {
  let sum = 0;
  let servicePrice = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }
    do {
      servicePrice = parseFloat(prompt('Сколько это будет стоить?', 0));
    } while (isNumber(servicePrice));
    sum += servicePrice;
  }
  return sum;
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

//Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг
function getFullPrice(price1, price2) {
  return price1 + price2;
}

//Расчёт скидки.
const getRollbackMessage = function (price) {
  if (price > 30000) return 'Даем скидку в 10%';
  if (price > 15000) return 'Даем скидку в 5%';
  if (price >= 0) return 'Скидка не предусмотрена';
  return 'Что-то пошло не так.';
}

//Функция возвращает строку: первый символ с большой буквы, остальные с маленькой.
const getTitle = function (string) {
  let str = string.trim().toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//Функция возвращает итоговую стоимость за вычетом процента отката
const getServicePercentPrices = function (price, rollback) {
  return Math.ceil(price - (price * (rollback / 100)));
}

asking();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(', '));
console.log(servicePercentPrice);
console.log(getTitle(title));
console.log(getRollbackMessage(fullPrice));