'use strict';

import "./css/index.css";
import "./index.html";

import Storage from "./js/components/elements/Storage";

import DomElement from "./js/components/elements/DomElement";
import ClassSelect from "./js/components/elements/ClassSelect";
import Form from "./js/components/elements/Form";
import Table from "./js/components/elements/Table";

import Worker from "./js/components/profession/Worker";
import Frontend from "./js/components/profession/Frontend";
import Runner from "./js/components/profession/Runner";

// Экземпляр класса Storage управляет данными принимает ключ и классы, которые описывают персонал Worker, Frontend, Runner. Worker базовый класс для остальных.
const storage = new Storage("worker", [Worker, Frontend, Runner]);

// Экземпляр классов Table, Form, ClassSelect регистрируются на storage, каждый отвечает за генерацию и управление соответствующими элементами на странице. DomElement базовый класс для всех этих классов.
const table = new Table(storage);
const form = new Form(storage);
const select = new ClassSelect(storage);

// Вспомогательные элементы, для группировки.
const query = new DomElement("div", ["col-lg-12"], { children: [select.elem, form.elem] });
const veiw = new DomElement("div", ["col-lg-12"], { children: [table.elem] });

new DomElement("div", ["container", "mt-5"], {
  parent: document.getElementById("app"),
  children: [query.elem, veiw.elem],
})