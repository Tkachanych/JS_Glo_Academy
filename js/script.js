'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

}

DomElement.prototype.createElement = function () {
  switch (this.selector[0]) {
    case '.':
      console.log('<div> .class');
      break;
      case '#':
      console.log('<p> #id');
      break;
  }
}

const newElem = new DomElement('.block', 10,10,'red',15);

newElem.createElement();