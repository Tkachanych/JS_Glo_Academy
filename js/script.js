'use strict';

const title = document.getElementsByTagName('h1')[0];
const btnAddScreen = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputTypeRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const btnStart = document.getElementsByClassName('handler_btn').start;
const btnReset = document.getElementsByClassName('handler_btn').reset;

const [total, totalCount, totalCountOther, totalFullCount, totalCountRollback] =
  document.getElementsByClassName('total-input');

let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  rollbackMessage: '',
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    this.addTitle();

    btnStart.addEventListener('click', this.start);
    btnAddScreen.addEventListener('click', this.addScreenBlock);
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    
    appData.showResult();
    // this.logger();
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    totalFullCount.value = appData.fullPrice;
  },

  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');

      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });
    });
  },

  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;
  },

  getRollbackMessage: function () {
    if (this.fullPrice > 30000) this.rollbackMessage = 'Даём скидку в 10%';
    else if (this.fullPrice > 15000) this.rollbackMessage = 'Даём скидку в 5%';
    else if (this.fullPrice >= 0)
      this.rollbackMessage = 'Скидка не предусмотрена';
    else this.rollbackMessage = 'Что-то пошло не так.';
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
  },
};
//debugger;
appData.init();
