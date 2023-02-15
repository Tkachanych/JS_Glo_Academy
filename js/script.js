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

  const createDiv = () => {
    const newDiv = document.createElement("div");

    newDiv.classList.add(this.selector.slice(1))
    newDiv.style.height = this.height + 'px';
    newDiv.style.width = this.width + 'px';
    newDiv.style.fontSize = this.fontSize + 'px';
    newDiv.style.background = this.bg;
    newDiv.innerText = text;

    document.body.append(newDiv);
  }

  const createPar = () => {
    const newPar = document.createElement("p");

    newPar.setAttribute('id', this.selector.slice(1))
    newPar.style.height = this.height + 'px';
    newPar.style.width = this.width + 'px';
    newPar.style.fontSize = this.fontSize + 'px';
    newPar.style.background = this.bg;
    newPar.innerText = text;

    document.body.append(newPar);
  }

  switch (this.selector[0]) {
    case '.':
      createDiv();
      break;
    case '#':
      createPar();
      break;
  }
}

const divElem1 = new DomElement('.block', 15, 100, 'red', 15);
const divElem2 = new DomElement('.block2', 20, 100, 'blue', 18);
const divElem3 = new DomElement('.block3', 20, 100, 'purple', 15);
const pElem1 = new DomElement('#best1', 30, 150, 'green', 20);
const pElem2 = new DomElement('#best2', 30, 150, 'grey', 20);
const pElem3 = new DomElement('#best3', 30, 150, 'yellow', 20);



divElem1.createElement(textForDiv);
divElem2.createElement(textForDiv);
pElem1.createElement(textForPar);
pElem2.createElement(textForPar);
divElem3.createElement(textForDiv);
pElem3.createElement(textForPar);