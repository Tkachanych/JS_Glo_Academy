'use strict'

const button = document.getElementById('btn');
const inputText = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const circleButton = document.getElementById('e_btn');
const inputRange = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const circleStartWidth = circle.offsetWidth;
const circleStartHeight = circle.offsetHeight;

const setSqareColor = function() {
  if (inputText.value.trim() != '') {
    square.style.backgroundColor = inputText.value;
  }
  inputText.value = '';
}

const setCircleSize = function (event) {
  rangeSpan.textContent = event.target.value + '%';
  circle.style.height = (circleStartHeight * event.target.value/100) + 'px';
  circle.style.width = (circleStartWidth * event.target.value/100) + 'px';
}

inputRange.value = '100';
rangeSpan.textContent = '100%';

circleButton.style.display = 'none';

button.addEventListener('click', setSqareColor);

inputRange.addEventListener('input', setCircleSize);
inputRange.addEventListener('change', setCircleSize);