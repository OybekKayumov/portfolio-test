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

// 2 for multiple countries
const getCountryData = function(country) { 

  const request = new XMLHttpRequest();

  //CORS : cross origin resource sharing
  // type of request(GET) and string(url) : SEND REQUEST
  // request.open('GET', 'https://restcountries.com/v3.1/name/portugal') 
  
  // 2
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`) 
  
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
    
    console.log(data.altSpellings[2]);
    console.log(data.translations.ara.official);
    console.log(data.translations.rus.official);
    console.log(data.translations.rus.common);

  });
//2 end
}


//todo How to take data from Array and Object
// ${data.currencies[0].name} : means we take 1st element in array and send it's name to HTML

//* example: an array name: altSpellings: with four elements (4)
// ['PT', 'Portuguesa', 'Portuguese Republic', 'República Portuguesa']
// to take 'Portuguese Republic'
//todo console.log(data.altSpellings[2]);
//* Portuguese Republic

//! OBJECT
// translations: {ara: {…}, ces: {…}, cym: {…}, deu: {…}, est: {…}, …}

//? INSIDE
// translations:
// ara: {official: 'الجمهورية البرتغالية', common: 'البرتغال'}
// ces: {official: 'Portugalská republika', common: 'Portugalsko'}
// cym: {official: 'Portuguese Republic', common: 'Portugal'}
// deu: {official: 'Portugiesische Republik', common: 'Portugal'}
// ...

// we write:
// console.log(data.translations.ara.official);
// console.log(data.translations.rus.official);
// console.log(data.translations.rus.common);

//*  الجمهورية البرتغالية
//*  Португальская Республика
//*  Португалия

//TODO 2: Reuse code to create an element for multiple countries
// getCountryData('portugal')
// getCountryData('uzbekistan')


// create function for v.2

const getCountryDataV2 = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  
  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    console.log('data: ', data);

    const html = `
      <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;    
  })
}

// getCountryDataV2('portugal') 
// getCountryDataV2('uzbekistan')

{/* <p class="country__row"><span>✈</span>${data.nativeName}</p>
<p class="country__row"><span>✈</span>${data.region}</p> */}


// TODO GET COUNTRY AND NEIGHBOUR

// 2
const renderCountry = function(data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1; 

}

// 1
const getCountryAndNeighbourV2 = function (country) {

  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  
  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    console.log('data: ', data);

    // Render country 1
    renderCountry(data)

    // Get neighbour country(2)
    // const neighbour = data.borders
    const [neighbour] = data.borders      //* take FIRST element from array : destructuring

    // if NO neighbour(island maybe) = borders: [] empty --> RETURN    //* borders: ['ESP']
    if (!neighbour) return

    // if has neighbour, create AJAX call 2 : search by CODE
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    
    request2.addEventListener('load', function() {

      // console.log(request2.responseText);  // get info about Spain
      console.log(this.responseText);  // get info about Spain NO JSON yet

      const data2 = JSON = JSON.parse(this.responseText)
      console.log(data2);

      renderCountry(data2, 'neighbour')
    })
  });
};

// getCountryAndNeighbourV2('portugal')
// getCountryAndNeighbourV2('uzbekistan')

// we have nested callbacks : "callback hell" 
// what if we need to see neighbour of neighbour

//? "callback hell" is Easy to identify by triangular shape, formed at the and of function
//? it makes code harder to maintain and very difficult to understand and difficult to reason about
//! RULE: that code hard to understand is basically bad code, because it will have more bugs, more difficult to add new features and more functionality to the app 

// setTimeout(() => {
//   console.log('1 sec. passed');
//   // new timer 
//   setTimeout(() => {                   //*\\ triangular
//     console.log('2 seconds passed');    //*\\ triangular
//     setTimeout(() => {                   //*\\ triangular
//       console.log('3 seconds passed');    //*\\ triangular
//     }, 1000)                                 //* triangular
//   }, 1000)                                  //* triangular
// }, 1000)                                   //* triangular
 


//TODO PROMISES : fetch

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// 1
//! fetch('https://restcountries.com/v3.1/name/portugal')

// 2

const request = fetch('https://restcountries.com/v3.1/name/portugal')
console.log('request: ', request);  

//? returns Promise {pending}
// as soon as we started to request, we stored the result of that into 'request' variable 
// our Promise is stored on 'request' variable 
//! Promise is a container or a placeholder for a future value, 
// future value example is the RESPONSE coming from AJAX call
// by using Promise - 1. we no longer need to rely on events and callback functions, 2. we can chain Promises for a sequence of asynchronous operations

// Promises can be in different states - LIFECYCLE 
// pending
//! settled: 2 types
    // 1. fulfilled    --> successfully resulted in a value we expected
    // 2. rejected     --> there has been an error during asynchronous task
//! but impossible to change that state
// consume a promise : get a result of Promise

// fetch function BUILDS the Promise and return it for us to CONSUME


//TODO CONSUMING PROMISES

// get data using promise
// 1
const getCountryDataFetch = function(country) {
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((res) => {
      console.log('response: ', res);
      return res.json()
    })
    .then((data) => {
      console.log('data: ', data);

      renderCountry(data[0])
    })
}

getCountryDataFetch('portugal');

// v3.1
//* Response {type: 'cors', url: 'https://restcountries.com/v3.1/name/portugal', redirected: false, status: 200, ok: true, …}
// v2
//* Response {type: 'cors', url: 'https://restcountries.com/v2/name/portugal', redirected: false, status: 200, ok: true, …}