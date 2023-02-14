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
    this.addTitle();

    btnStart.addEventListener('click', () => this.start());
    btnAddScreen.addEventListener('click', () => this.addScreenBlock());
    inputTypeRange.addEventListener('input', () => this.addRollback());
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  readyToStart: function () {
    let ready = true;
    screens.forEach((screen) => {
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
    if (!this.readyToStart()) {
      alert('Не выбран тип экрана, или не заполнено количество экранов.');
      return;
    };

    this.cleanData();

    this.addScreens();
    this.addServices();
    this.addRollback();
    this.addPrices();

    this.showResult();
    //   this.logger();
    console.log(this);
  },

  addRollback: function () {
    inputRangeValue.textContent = inputTypeRange.value + '%';
    this.rollback = +inputTypeRange.value;
  },

  cleanData: function () {
    this.screens = [];
    this.servicesPercent = {};
    this.servicesNumber = {};
    this.screenPrice = 0;
    this.screenCount = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.rollback = 0;
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    totalFullCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.screenCount;
  },

  addScreens: function () {
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');

      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    cloneScreen.querySelector('input').value = '';

    screens[screens.length - 1].after(cloneScreen);
    screens = document.querySelectorAll('.screen');
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
      this.screenCount += +screen.count;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      this.screenPrice +
      this.servicePricesNumber +
      this.servicePricesPercent;

    this.servicePercentPrice = Math.ceil(
      this.fullPrice - this.fullPrice * (this.rollback / 100)
    );
  },

  logger: function () {
    console.dir(this.screens);
    console.log('screenPrice = ' + this.screenPrice);
    console.log('rollback = ' + this.rollback);
    console.log('fullPrice = ' + this.fullPrice);
    console.log('servicePercentPrice = ' + this.servicePercentPrice);
    console.log(this.servicesPercent);
    console.log(this.servicesNumber);
  },
};
//debugger;
appData.init();
