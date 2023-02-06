'use strict';

const appData = {

  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  allServicePrices: 0,
  fullPrice: 0,
  rollbackMessage: '',
  servicePercentPrice: 0,
  services: [],

  start: function () {
    this.asking();
    this.getTitle();
    this.addPrices();
    this.getAllServicePrices();
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

    for (let i = 0; i < 2; i++) {
      let name = prompt('Какие типы экранов нужно разработать?');
      let price = 0;

      do {
        price = prompt('Сколько будет стоить данная работа?');
      } while (!this.isNumber(price));

      this.screens.push({ id: i, name: name, price: parseFloat(price) });
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt('Какой дополнительный тип услуги нужен?');
      let price = 0;

      do {
        price = prompt('Сколько это будет стоить?');
      } while (!this.isNumber(price));

      this.services.push({ id: i, name: name, price: parseFloat(price) });
    }

    this.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  getTitle: function () {
    let str = this.title.trim().toLowerCase();
    this.title = str.charAt(0).toUpperCase() + str.slice(1);
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }
  },

  getAllServicePrices: function () {
    for (let service of this.services) {
      this.allServicePrices += +service.price;
    }
  },

  getFullPrice: function () {
    this.fullPrice = this.screenPrice + this.allServicePrices;
  },

  getRollbackMessage: function () {
    if (this.fullPrice > 30000) this.rollbackMessage = 'Даём скидку в 10%';
    else if (this.fullPrice > 15000) this.rollbackMessage = 'Даём скидку в 5%';
    else if (this.fullPrice >= 0) this.rollbackMessage = 'Скидка не предусмотрена';
    else this.rollbackMessage = 'Что-то пошло не так.';
  },

  getServicePercentPrices: function () {
    this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100)));
  },

  logger: function () {
  console.log('title = ' + this.title);
  console.dir(this.screens);
  console.log('screenPrice = ' + this.screenPrice);
  console.log('adaptive = ' + this.adaptive);
  console.log('rollback = ' + this.rollback);
  console.log('allServicePrices = ' + this.allServicePrices);
  console.log('fullPrice = ' + this.fullPrice);
  console.log('rollbackMessage = ' + this.rollbackMessage);
  console.log('servicePercentPrice = ' + this.servicePercentPrice);
  console.dir(this.services);
  }
}

appData.start();