'use strict';

let textForDiv = 'This is DIV!';
let textForPar = 'It is a paragraph!';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElement = function (text) {
  let prop;
  let elem;

  switch (this.selector[0]) {
    case '.':
      elem = 'div';
      prop = 'class';
      break;
    case '#':
      elem = 'p';
      prop = 'id';
      break;
  }

  const newElem = document.createElement(elem);

  newElem.setAttribute(prop, this.selector.slice(1));
  newElem.style.height = this.height + 'px';
  newElem.style.width = this.width + 'px';
  newElem.style.fontSize = this.fontSize + 'px';
  newElem.style.background = this.bg;
  newElem.innerText = text;

  document.body.append(newElem);
}

const divElem1 = new DomElement('.block', 50, 100, 'red', 15);
const divElem2 = new DomElement('.block2', 20, 100, 'blue', 18);
const divElem3 = new DomElement('.block3', 20, 100, 'purple', 15);
const pElem1 = new DomElement('#best1', 30, 150, 'green', 20);
const pElem2 = new DomElement('#best2', 30, 150, 'grey', 20);
const pElem3 = new DomElement('#best3', 50, 250, 'yellow', 30);

divElem1.createElement(textForDiv);
divElem2.createElement(textForDiv);
pElem1.createElement(textForPar);
pElem2.createElement(textForPar);
divElem3.createElement(textForDiv);
pElem3.createElement(textForPar);