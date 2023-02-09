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
  input.value = '';
}

const setCircleSize = function (event) {
  rangeSpan.textContent = event.target.value;
  circle.style.width = event.target.value + '%';
  circle.style.height = event.target.value + '%';
}

circleButton.style.display = 'none';

button.addEventListener('click', setSqareColor);

inputRange.addEventListener('input', setCircleSize);
inputRange.addEventListener('change', setCircleSize);