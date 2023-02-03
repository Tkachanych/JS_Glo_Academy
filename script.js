'use strict';

const appData = {

  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  rollbackMessage: '',
  allServicePrices: 0,
  service1: '',
  service2: '',
  fullPrice: 0,
  servicePercentPrice: 0,

  isNumber: function (num) {
    return isNaN(num);
  },

  asking: function () {
    this.title = prompt('Как называется Ваш проект?', 'Калькулятор вёрстки');
    this.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

    do {
      this.screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'));
    } while (this.isNumber(this.screenPrice));

    this.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  getTitle: function (string) {
    let str = string.trim().toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  getAllServicePrices: function () {
    let servicePrice = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        this.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
        this.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }
      do {
        servicePrice = parseFloat(prompt('Сколько это будет стоить?', 0));
      } while (this.isNumber(servicePrice));
      this.allServicePrices += servicePrice;
    }
  },

  getFullPrice: function () {
    this.fullPrice = this.screenPrice + this.allServicePrices;
  },

  getRollbackMessage: function (price) {
    if (price > 30000) this.rollbackMessage = 'Даем скидку в 10%';
    else if (price > 15000) this.rollbackMessage = 'Даем скидку в 5%';
    else if (price >= 0) this.rollbackMessage = 'Скидка не предусмотрена';
    else this.rollbackMessage = 'Что-то пошло не так.';
  },

  getServicePercentPrices: function () {
    this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100)));
  },

  logger: function () {
    for (let key in this) {
      console.log(this[key]);
    }
  },

  start: function () {
    this.asking();
    this.title = this.getTitle(this.title);
    this.getAllServicePrices();
    this.getFullPrice();
    this.getRollbackMessage(this.fullPrice);
    this.getServicePercentPrices();
    this.logger();
  },
}

appData.start();