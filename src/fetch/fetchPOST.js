// 1 simple Fetch
// fetch request is really simple
// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'

const getFetch = document.querySelector('.getFetch');

const url = 'https://jsonplaceholder.typicode.com/todos/1'

fetch (url)
  .then(response => response.json())
  // .then(data => console.log('data: ', data))
  .then(data => {
    
    console.log('data: ', data)
    getFetch.innerHTML = `
           <p>Name: ${data.title}</p>
           <p>ID: ${data.id}</p>
           <p>Completed: ${data.completed}</p>    
       `
  })



// 2 full Fetch

// async function postData(url= '', data ={} ) {
  
  //! Default options are marked with *
  // const response = await fetch(url, {
    // method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    // headers: {
      // 'Content-type': 'application/json'
      //'Content-type': 'application/x-www-form-urlencoded'
    // },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-refferer, *no-refferer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url 
    // body: JSON.stringify(data) // body data type must match "Content-type" header
  // })

  // return response.json(); //parses JSON response into native JavaScript objects

// }


//todo  3 : POST works.
const postFetch = document.querySelector('.postFetch');

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Cline Walter',
    body: '48, Street, City, Country',
    userId: 789,
  }),
  headers: {
    'Content-type': 'application/json'
  },
  })
    .then((res) => res.json()) //? 
    .then((data) => {
       console.log('data: ', data)
    
       postFetch.innerHTML = `
          <p>Post data:</p>
          <p>Name: ${data.title}</p>
          <p>About: ${data.body}</p>
          <p>userID: ${data.userId}</p>
          <p>ID: ${data.id}</p>

   `
  });

  //todo 4 try with function 




  