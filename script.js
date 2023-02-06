'use strict';

const appData = {

  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  allServicePrices: 0,
  fullPrice: 0,
  rollbackMessage: '',
  servicePercentPrice: 0,
  services: {},

  start: function () {
    this.asking();
    this.getAllServicePrices();
    this.getTitle();
    this.getFullPrice();
    this.getRollbackMessage();
    this.getServicePercentPrices();

    this.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num))
      && (parseFloat(num).toString().length === num.length);
  },

  asking: function () {
    this.title = prompt('Как называется Ваш проект?', 'Калькулятор вёрстки');
    this.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

    do {
      this.screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!this.isNumber(this.screenPrice));

    this.adaptive = confirm('Нужен ли адаптив на сайте?');

    for (let i = 0; i < 2; i++) {
      let name = prompt('Какой дополнительный тип услуги нужен?');
      let servicePrice;

      do {
        servicePrice = prompt('Сколько это будет стоить?');
      } while (!this.isNumber(servicePrice));

      this.services[`${name}${i}`] = parseFloat(servicePrice);
    }
  },

  getTitle: function () {
    let str = this.title.trim().toLowerCase();
    this.title = str.charAt(0).toUpperCase() + str.slice(1);
  },

  getAllServicePrices: function () {
    for (let key in this.services) {
      this.allServicePrices += this.services[key];
    }
  },

  getFullPrice: function () {
    this.fullPrice = parseFloat(this.screenPrice) + this.allServicePrices;
  },

  getRollbackMessage: function () {
    if (this.fullPrice > 30000) this.rollbackMessage = 'Даем скидку в 10%';
    else if (this.fullPrice > 15000) this.rollbackMessage = 'Даем скидку в 5%';
    else if (this.fullPrice >= 0) this.rollbackMessage = 'Скидка не предусмотрена';
    else this.rollbackMessage = 'Что-то пошло не так.';
  },

  getServicePercentPrices: function () {
    this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100)));
  },

  logger: function () {
    for (let key in this) {
      console.log(this[key]);
    }
  }
}

appData.start();