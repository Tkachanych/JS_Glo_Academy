'use strict'

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const toDoData = [];

const saveData = function () {
  localStorage['toDoData'] = JSON.stringify(toDoData);
}

const render = function () {
  todoList.innerHTML = '';
  todoCompleted.innerHTML = '';

  toDoData.forEach(function (item, index) {
    const li = document.createElement('li');

    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
      '<div class="todo-buttons">' + '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' + '</div>'

    if (item.completed) {
      todoCompleted.append(li);
    }
    else {
      todoList.append(li);
    }

    li.querySelector('.todo-complete').addEventListener('click', function () {
      item.completed = !item.completed;
      render();
      saveData();
    });

    li.querySelector('.todo-remove').addEventListener('click', function () {
      toDoData.splice(index, 1);
      render();
      saveData();
    });
  })
};

todoControl.addEventListener('submit', function (event) {
  event.preventDefault();
  if (headerInput.value === '') return;

  const newTodo = {
    text: headerInput.value,
    completed: false,
  }

  toDoData.push(newTodo);
  headerInput.value = '';

  render();
  saveData();
});

if (localStorage['toDoData']) {
  toDoData.push(...JSON.parse(localStorage['toDoData']));
  render();
}