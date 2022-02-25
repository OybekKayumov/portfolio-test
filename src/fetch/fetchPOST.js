// 1 simple Fetch
// fetch request is really simple
// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'



//const url = 'https://jsonplaceholder.typicode.com/todos/1'

// fetch (url)
//   .then(response => response.json())
//   .then(data => console.log('data: ', data))



// 2 full Fetch

async function postData(url= '', data ={} ) {
  
  //! Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-type': 'application/json'
      //'Content-type': 'application/x-www-form-urlencoded'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-refferer, *no-refferer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url 
    body: JSON.stringify(data) // body data type must match "Content-type" header
  })

  return response.json(); //parses JSON response into native JavaScript objects

}


const postFetch = document.querySelector('.postFetch');

postData('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Oybek Kayumov',
    body: '48',
    userId: 567,
  }),
  headers: {
    'Content-type': 'application/json'
  },
  })
  // .then((data) => {
  //   console.log('data :', data);
  // })

  // .then((res) => res.json()) //? 
  .then((data) => {
    console.log('data: ', data)
    

    postFetch.innerHTML = `
            <p>Name: ${title}</p>

    `
  })


  // divAbout.innerHTML = `
  //         <p>Name: ${data.title}</p>
  //         <p>Latin Name: ${data.latin_name}</p>
  //         <p>Animal Type: ${data.animal_type}</p>
  //         <p>Active Time: ${data.active_time}</p>
  //         <p>Habitat: ${data.habitat}</p>
  //         <p>Diet: ${data.diet}</p>
  //         <p>Geo Range: ${data.geo_range}</p>
  //     `;
