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

// catch error function
const renderError = (msg) => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;  //* go to finally method
} 


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
  countriesContainer.style.opacity = 1;    //* go to finally method

}

{/* <p class="country__row"><span>⌚</span>${data.timezones}</p>
<p class="country__row"><span>🌎</span>${data.latlng}</p> */}

// 1
// const getCountryAndNeighbourV2 = function (country) {

//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
  
//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText);
//     console.log('data: ', data);

//     // Render country 1
//     renderCountry(data)

//     // Get neighbour country(2)
//     // const neighbour = data.borders
//     const [neighbour] = data.borders      //* take FIRST element from array : destructuring

//     // if NO neighbour(island maybe) = borders: [] empty --> RETURN    //* borders: ['ESP']
//     if (!neighbour) return

//     // if has neighbour, create AJAX call 2 : search by CODE
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
    
//     request2.addEventListener('load', function() {

//       // console.log(request2.responseText);  // get info about Spain
//       console.log(this.responseText);  // get info about Spain NO JSON yet

//       const data2 = JSON = JSON.parse(this.responseText)
//       console.log(data2);

//       renderCountry(data2, 'neighbour')
//     })
//   });
// };

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
// console.log('request: ', request);  

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
// const getCountryDataFetch = function(country) {
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  // fetch(`https://restcountries.com/v2/name/${country}`)
    // .then((res) => {
      // console.log('response: ', res);
      // return res.json()
//     })
//     .then((data) => {
//       console.log('data: ', data);

//       renderCountry(data[0])
//     })
// }

// getCountryDataFetch('portugal');
// getCountryDataFetch('uzbekistan');


// v3.1
//* Response {type: 'cors', url: 'https://restcountries.com/v3.1/name/portugal', redirected: false, status: 200, ok: true, …}
// v2
//* Response {type: 'cors', url: 'https://restcountries.com/v2/name/portugal', redirected: false, status: 200, ok: true, …}


// let assume success state of Promise : fulfilled, and we have a value available to work with.
// to handle this fulfilled state we can use THEN method, which available on all promises
// So, Fetch will return Promise
// and on all promises we can call the THEN method

// into THEN method we need to pass a callback function that we want to be executed as soon as the promise is fulfilled
// as soon as THE RESULT is available
// this function will receive one argument - is resulting value of the fulfilled promise.
// res 
// and we can use this response  --> console.log('');
// we interested in  data is in the RESPONSE BODY  

// Response {type: 'cors', url: 'https://restcountries.com/v2/name/portugal', redirected: false, status: 200, ok: true, …}
// body: (...)      //!  *** click  body: ReadableStream
// bodyUsed: false
// headers: Headers {}
// ok: true
// redirected: false
// status: 200
// statusText: "OK"
// type: "cors"
// url: "https://restcountries.com/v2/name/portugal"
// [[Prototype]]: Response

// to read data from the BODY we need to call JSON method on the response
// available on all of the response objects that is coming from fetch function

// response.json() also return a new Promise
// so we need to return it 
// return response.json()

// and we need to handle this promise as well
// the way to do that is to call another THAN
//like
// then(data => console.log(data))
// now we are back to having the same data, that we already had before
// but this time using Promise (2 promises)


// TODO CHAINING PROMISES 

// const getCountryDataFetch = (country) => {

  // Country 1
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  // fetch(`https://restcountries.com/v2/name/${country}`)
  //   .then(
  //     (response) => {
  //       console.log('response: ', response);
        
  //       if (!response.ok) { //* if OK is false
  //         throw new Error(`Country not found ${response.status}, ${response.statusText}, ok: ${response.ok} `)  
  //       }  
  //       return response.json()
  //       // err => alert(err)   //* cath error 1st promise
  //     })    
  //   .then((data) => {                 //! returns Promise
  //     console.log('data: ', data);

  //     renderCountry(data[0])

      // SECOND FETCH:  Country 2
      // const neighbour = data[0].borders[0] //? if error in Second Promise
    //   const neighbour = 'hjghjdfhgfd'  // which doesn't exist

    //   if (!neighbour) return;

    //   return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    //                   // .then(res => res.json())  //! Error, don't do this. Mistake of beginners, always handle it outside 
    //   // return 24;   //* example returning promise
    // })
    // .then(data => alert(data)); //* example returning promise: 24
//       .then( response => {

//           if (!response.ok) { //* if OK is false
//             throw new Error(`Country not found ${response.status}, ${response.statusText}, ok: ${response.ok} `)  
//           }  
//           return response.json()    //! correct, handle it outside by simply continuing chain like this    
//         // err => alert(err)   //* cath error 2nd promise
//       })   
//     .then(data => {
//       renderCountry(data, 'neighbour')
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥`)   //* cath error 

//       renderError(`Error 👆👆👆 ${err.message}`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;  //* 
//     })
// }

// getCountryDataFetch('portugal');
// getCountryDataFetch('uzbekistan');
// getCountryDataFetch('spain');
// getCountryDataFetch('philippines');


//TODO Promise : REJECTED STATE 

// btn.addEventListener('click', () => {
//   getCountryDataFetch('portugal');  

// })

//! there are 2 ways to handling(CATCHING) rejections:
//? 1. to pass a second callback function into the THEN method
// chains stop here when error handles
// catch error after each Promise

//? 2. handle all errors  no matter where they are appeared, catch at the end of the chain by adding CATH method
//! CATH also return Promise, this is a reason why FINALLY method works

//? FINALLY method
// we use this method for smth that always needs to happen no matter the result of Promise
// show spinner


//? IF ERROR in First Promise:
// Analize what happens here 
// getCountryDataFetch('hjkhkjhkl')  //? turn of to catch error in Second Promise 

//* if (!response.ok) { //* if OK is false
//*   throw new Error(`Country not found 
//*         ${response.status},
//*         ${response.statusText},
//*         ok: ${response.ok} `)  
//* } 


// we created new Error using Constructor function, and pass in a message
// which gonna be the error message,
// then we use THROW keyword which will immediately terminate the current function just like RETURN does it
// promise will immediately reject, Promise will be Rejected Promise
// and that Rejected Promise will propagate all the way down to the CATCH handler

// always use CATCH, and if necessary, you can use Finally

//? IF ERROR in Second Promise:
//same code to catch error


//! create helper function, gets data and converts to JSON 

const getJSON = function (url, errorMsg = "Something went wrong") {
   return fetch(url).then(response => {
        if (!response.ok) throw new Error (`${errorMsg} (${response.status})`) 
        
        return response.json()
      });

}

const getCountryDataWithErr = function(country) {
  getJSON(
      `https://restcountries.com/v2/name/${country}`,
      'Country not found'
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0]
      // const neighbour = 'dssfdfffg';   //! error 400
      console.log("neighbour: ", neighbour);

      // if (!neighbour) return;
      if (!neighbour) throw new Error ("No neighbour found!");

      // Country 2
       return getJSON(
          `https://restcountries.com/v2/alpha/${neighbour}`,
          'Country not found'
       );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => {
  getCountryDataWithErr('portugal');  

})

// getCountryDataWithErr('australia')  //! doesnt work


//TODO EVENT LOOP IN PRACTICE

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0)
    // after 0 sec this callback will be put on the callback queue
    // Promise
// Promise.resolve('Resolved promise 1')
  // .then(res => console.log('res: ', res))

// Promise.resolve('Resolved promise 2')
  // .then(res => {
    // for (let i = 0; i < 100000000; i++) {}
    // console.log('res: ', res)
  // }) 

// console.log('Test end');



// what order these four messages will be logged to the consol?
// code outside of any callback will run first
// 1,2 console.log('');
// both timer and a Promise will finish same time, right after 0 seconds
// Promise immediately become resolved

//* Test start
// Test end
// res:  Resolved promise 1
//! 0 sec timer

// после добавления 2го Promise, setTimeout все равно появляетя последним
//* Test start
// Test end
// res:  Resolved promise 1
//* res:  Resolved promise 2
//! 0 sec timer

// только после всех "0 sec timer" СООБЩЕНИЕ ПОЯВЛЯЕТСЯ
// this 0 sec timeout is not garantee 
//! this means that you cannot really do high precision things using JS timers
// высокоточные вещи
// keep that in mind, whenever you are working with promises
// basically with mikro-tasks and with timers at the same time 



//TODO BUILDING A SIMPLE PROMISE
//! Promises are a special kind of Object in JavaScript
//? Promise constructor takes exactly ONE argument, called "executed function"
// it will automatically execute this executor function by passing in 2 other arguments: RESOLVE and REJECT 
// if fulfilled we call resolve function
// whatever value we pass into the resolve function, is gonna be the result of the promise will be available in the THEN handler

// const lotteryPromise = new Promise(function(resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve('You WIN 💰💰');
//   } else {
//     reject('You lost 😒💪')
//   }
// }) 

//* We created an executor function which will be called by Promise constructor as soon as it runs, immediately
//* Then the Promise calls function and passes in the resolve and reject functions
//* so that we can use them

//! CONSUMING PROMISE

// lotteryPromise
//   .then(res => {
//     console.log('res: ', res);    //* if fulfilled
//   })
//   .catch(err => {
//     console.error('err: ', err);  //* if rejected
//   })

//! simulate this function by adding a simple timer
// it will simulate time data is passed between buying the lottery ticket and getting the result

    // const lotteryPromise = new Promise(function(resolve, reject) {
        
    //     console.log('Lottery draw is happening 🔮');
    //     setTimeout(() => {
    //       if (Math.random() >= 0.5) {
    //         resolve('You WIN 💰💰');
    //       } else {
    //         reject(new Error ('You lost 😒💪'))
    //       }  
    //     }, 2000);
    //   })

    // lotteryPromise
    //   .then(res => {
    //     console.log('res: ', res);    //* if fulfilled
    //   })
    //   .catch(err => {
    //     console.error('err: ', err);  //* if rejected
    //   })


//! CREAT A WAIT FUNCTION
    // const wait = function(seconds) {
    //   return new Promise(function(resolve) {
    //     setTimeout(resolve, seconds * 1000)
    //   })
    // }

    // wait(2).
    //   then(() =>{
    //     console.log('I waited for 2 seconds');
    //     return wait(1);
    //   })
    //   .then(() => {
    //     console.log('I waited for 1 seconds');
    //   })


    //   //
    // wait(1)
    //   .then(() =>{
    //     console.log('1 second passed');
    //     return wait(1);
    //   })
    //   .then(() =>{
    //     console.log('2 second passed');
    //     return wait(1);
    //   })
    //   .then(() =>{
    //     console.log('3 second passed');
    //     return wait(1);
    //   })
    //   .then(() => {
    //     console.log('4 second passed');
    //   })

//!COMPARE

  // setTimeout(() => {
//   console.log('1 second passed');
//   // new timer 
//   setTimeout(() => {                   //*\\ triangular
//     console.log('2 second passed');     //*\\ triangular
//     setTimeout(() => {                   //*\\ triangular
//       console.log('3 second passed');     //*\\ triangular
        //  setTimeout(() => {                //*\\ triangular
          // console.log('4 second passed');     //* triangular
        //  }, 1000)                            //* triangular
//     }, 1000)                                //* triangular
//   }, 1000)                                 //* triangular
// }, 1000)  


//TODO EASY WAY TO CREATE A FULFILLED OR REJECTED PROMISE IMMEDIATELY

// .resolve is a static method on the Promise constructor
// Promise.resolve(pass resolve value)

    // Promise.resolve('abc')
    //     .then(x => console.log('x: ', x))

    // Promise.reject(new Error('Problem!'))
    //     .catch(x => console.error('x: ', x))

    // no necessary THEN, because there will be no resolved value anyway
//! AND THESE TWO SHOULD NOW APPEAR AT THE VERY BEGINNING 

// Lottery draw is happening 🔮  //* COMES FROM PREVIOUS PROMISE
// x:  abc              //! comes first
// x:  Error: Problem!  //! comes first
// (anonymous) @ index.js:682
// Promise.catch (async)
// (anonymous) @ index.js:682
// 1 second passed
// res:  You WIN 💰💰
// I waited for 2 seconds
// 2 second passed
// I waited for 1 seconds
// 3 second passed
// 4 second passed



//TODO Promisifying the Geolocation

// navigator.geolocation.getCurrentPosition(1stArgument, 2ndArgument) 

//   navigator.geolocation.getCurrentPosition(position => {    //* 1st argument
//   console.log('position: ', position);
// },
//   err => {                                            //* 2nd argument      
//     console.error('err: ', err);
//   }
// )

console.log('Getting Position...');  //! will be consoled FIRST
//? because script will start with navigator... , offloaded its work to the background to Browser API and immediately moves to next command line

const getPosition = function() {
  return new Promise(function(resolve, reject) {

    // navigator.geolocation.getCurrentPosition(position => { 
    //   console.log('position: ', position);
    //   resolve(position);
    // },
    //   err => {                        
    //     console.error('err: ', err);
    //     reject(err);
    //   }
    // )

    navigator.geolocation.getCurrentPosition(resolve, reject) 
    
  })
}

getPosition().then(pos => console.log('position: ', pos))