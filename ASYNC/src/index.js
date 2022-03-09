// 1
// const p = document.querySelector('p');

// setTimeout(() => {
//   p.textContent = 'My name is JavaScript!'
// }, 3000);

// p .style.color = 'red'

// setTimeout(() => {console.log("this is the first message")}, 5000);
// setTimeout(() => {console.log("this is the second message")}, 3000);
  
// setTimeout(() => {
//   console.log("this is the third message");
//   p.innerHTML = 'My name is JavaScript!';
// }, 1000);

// [1, 2, 3].map(v => v * 2);
//callback functions alone DO NOT make code asynchronous

// 2
// const img = document.querySelector('.bear');
// img.src = 'img/bear.jpg';
// img.addEventListener('load', function() {
//   img.classList.add('fadeIn');
// });

// p.style.width = '300px';
// p.style.fontSize = '24px';
// p.style.fontFamily = 'Rubik';

//! JSON is basically JavaScript Object, but converted to a String

'use strict'

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// XMLHttpRequest();           //* old school

const request = new XMLHttpRequest();

//CORS : cross origin resource sharing
// type of request(GET) and string(url) : SEND REQUEST
request.open('GET', 'https://restcountries.com/v3.1/name/portugal') 
// data = request.send();
request.send();           //*  SEND REQUEST

// get result
// console.log('request resText: ', request.responseText);  //* same, but not works

request.addEventListener('load', function() {
  // console.log('request resText: ', this.responseText); //* see consol NO JSON
  
  // we need to convert this data to an actual JS object, 
  // because what we have here right now is JSON - big string of text
  
  // const data = JSON.parse(this.responseText)
  // console.log('data: ', data);                 //* see consol : data:  [{…}]
  
  // destructure code
  
  // const [data] = JSON.parse(this.responseText)[0]  //! same
  const [data] = JSON.parse(this.responseText)
  console.log('data: ', data);                 //* see consol : data:  [{…}]
  
  // Build a card component
  const html = `
        <article class="country">
            <img class="country__img" src="${data.flags.svg}" alt="" srcset="">
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h3 class="country__region">${data.region}</h3>
              <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(2)}</p>
              <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
              <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
            </div>
        </article>       
  
  `;
  
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
  
  
})

// how to take data from array 
// ${data.currencies[0].name} means we
// currencies: {EUR: {…}}
//? INSIDE
// currencies:
// EUR: {name: 'Euro', symbol: '€'}
// [[Prototype]]: Object