'use strict';

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
}

const country = document.getElementById('country');
const city = document.getElementById('city');
const result = document.querySelector('.result');

const cleanCity = () => {
  const cities = document.querySelectorAll('.city')
  cities.forEach(e => e.remove());
  city.style.display = 'initial';
}

const showCities = function (event) {
  cleanCity();
  const arr = event.target.value;
  cityArr[arr].forEach(element => {
    const opt = document.createElement("option");
    opt.className = 'city'
    opt.textContent = element;
    city.append(opt);
  });
  showResult(event.target.selectedOptions);
}

const showResult = function (str) {
 // result.textContent = str;
 console.log(str);
  
}



country.addEventListener('click', showCities, 'once');
country.addEventListener('change', showCities);