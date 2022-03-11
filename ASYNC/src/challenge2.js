const imgContainer = document.querySelector('.images');

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  });
};

const createImg = function(imgPath) {
  return new Promise (function(resolve, reject) {

    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function() {
      imgContainer.append(img);

      resolve(img);
    })

    img.addEventListener('error', function() {

      reject(new Error('Image not found!!!'));
    })
  })
}

let currImg;

createImg('img/img-1.jpg')
  .then(img => {
    currImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currImg.style.display = 'none';
    
    return createImg('img/img-2.jpg');
  })
  .then(img => {
    currImg = img;
    console.log('Image 2 loaded');
    return wait(2)
  })
  .then(() => {
    currImg.style.display = 'none';
  })
  .catch(err => console.error('err: ', err))








// const renderCountry = function(data, className = '') {
//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} people</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//       </article>
//     `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;    
// }

// const whereAmI = function(lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       console.log('res: ', res);

//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`) 
//       return res.json()
//     })    
//     .then(data => {
//       // console.log('data: ', data);
//       console.log(`You are in ${data.city}, ${data.country}`);  

//       // fetch 2
//       return fetch(`https://restcountries.com/v2/name/${data.country}`)
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json()
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥 `)) 
// }

// whereAmI(52.508,13.381); 
// whereAmI(19.037,72.873); 
// whereAmI(-33.93,18.474); 

