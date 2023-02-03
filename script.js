'use strict';

const game = function () {

  let userAnswer;

  const numToGuess = Math.floor(Math.random() * 100) + 1;
  console.log(numToGuess);

  const isNumber = function (num) {
    return typeof num === 'number' && isFinite(num);
  }

  const getAnswer = function (str) {
    if (str === null) {
      return null;
    } else if (isNumber(+str) && str !== '') {
      return parseInt(str);
    } else {
      return getAnswer(prompt('Введи число!'));
    }
  }

  const tryToGues = function (numToGuess) {

    userAnswer = getAnswer(prompt('Угадай число от 1 до 100'));

    switch (true) {

      case userAnswer === null:
        alert('Игра окончена!');
        return;

      case numToGuess < userAnswer:
        alert('Загаданное число меньше');
        return tryToGues(numToGuess);

      case numToGuess > userAnswer:
        alert('Загаданное число больше');
        return tryToGues(numToGuess);

      case numToGuess === userAnswer:
        alert('Поздравляю, Вы угадали!!!');
        return;
    }
  }

  tryToGues(numToGuess);
}

game();