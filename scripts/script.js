'use strict'

const books = document.querySelectorAll('.books .book');
const adv = document.querySelector('.adv');
const book1 = books[1];
const book2 = books[0];
const book3 = books[4];
const book4 = books[3];
const book5 = books[5];
const book6 = books[2];

const body = document.querySelector('body');

const bookTwoChapters = book2.querySelectorAll('ul li');
const bookFiveChapters = book5.querySelectorAll('ul li');

const elemForCopy = book6.querySelectorAll('ul li')[8]
const cloneElem = elemForCopy.cloneNode(true);

//1.Восстановить порядок книг.
book2.before(book1);
book5.after(book6);
book4.before(book3);

//2.Заменить картинку заднего фона на другую из папки image
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//3.Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
book3.querySelector('h2 a').innerHTML = 'Книга 3. this и Прототипы Объектов';

//4.Удалить рекламу со страницы
adv.remove();

//5.Восстановить порядок глав во второй и пятой книге
bookTwoChapters[3].after(bookTwoChapters[6], bookTwoChapters[8]);
bookTwoChapters[10].before(bookTwoChapters[2]);

bookFiveChapters[3].before(bookFiveChapters[9]);
bookFiveChapters[6].before(bookFiveChapters[2]);
bookFiveChapters[8].before(bookFiveChapters[5]);

//6.В шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
cloneElem.innerHTML = 'Глава 8: За пределами ES6';
elemForCopy.insertAdjacentElement("afterend", cloneElem);