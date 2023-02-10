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
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  rollback: 0,
  servicePricesPercent: 0, // наценка за услуги
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0, // откат!
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    appData.addTitle();

    btnStart.addEventListener('click', appData.start);
    btnAddScreen.addEventListener('click', appData.addScreenBlock);
    inputTypeRange.addEventListener('input', appData.addRollback);
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  readyToStart: () => {
    let ready = true;
    screens = document.querySelectorAll('.screen');
    screens.forEach(function (screen) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      if (
        select.value === '' ||
        isNaN(input.value) ||
        +input.value < 1 ||
        !Number.isInteger(+input.value) ||
        input.value.trim().length !== input.value.length
      ) {
        input.value = '';
        ready = false;
      }
    });
    return ready;
  },

  start: function () {
    if (!appData.readyToStart()) return;

    appData.cleanData();

    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    appData.showResult();
    //   appData.logger();
    console.log(appData);
  },

  addRollback: function () {
    inputRangeValue.textContent = inputTypeRange.value + '%';
    appData.rollback = +inputTypeRange.value;
  },

  cleanData: function () {
    appData.screens = [];
    appData.servicesPercent = {};
    appData.servicesNumber = {};
    appData.screenPrice = 0;
    appData.screenCount = 0;
    appData.fullPrice = 0;
    appData.servicePercentPrice = 0;
    appData.servicePricesPercent = 0;
    appData.servicePricesNumber = 0;
    appData.rollback = 0;
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    totalFullCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.screenCount;
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
        count: +input.value,
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
      appData.screenCount += +screen.count;
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

    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },

  logger: function () {
    console.dir(appData.screens);
    console.log('screenPrice = ' + appData.screenPrice);
    console.log('rollback = ' + appData.rollback);
    console.log('fullPrice = ' + appData.fullPrice);
    console.log('servicePercentPrice = ' + appData.servicePercentPrice);
    console.log(appData.servicesPercent);
    console.log(appData.servicesNumber);
  },
};
//debugger;
appData.init();
