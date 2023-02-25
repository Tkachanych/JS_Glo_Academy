'use strict'

const button = document.getElementById('btn');
const inputText = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const circleButton = document.getElementById('e_btn');
const inputRange = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const setSqareColor = function() {
  if (inputText.value.trim() != '') {
    square.style.backgroundColor = inputText.value;
  }
  inputText.value = '';
}

const setCircleSize = function () {
  rangeSpan.textContent = inputRange.value + '%';
  circle.style.height = inputRange.value + '%';
  circle.style.width = inputRange.value + '%';
}

setCircleSize();

circleButton.style.display = 'none';

button.addEventListener('click', setSqareColor);

inputRange.addEventListener('input', setCircleSize);
inputRange.addEventListener('change', setCircleSize);