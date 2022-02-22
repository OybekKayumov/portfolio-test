const catResult = document.querySelector('#catResult');
const dogResult = document.querySelector('#dogResult');
const catBtn = document.querySelector('#catBtn');
const dogBtn = document.querySelector('#dogBtn');

const getRandomCat = () => {
  fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => {
      console.log('fox data: ', data );
      catResult.innerHTML = `<img src="${data.image}">`      
    })
  }
  
  const getRandomDog = () => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(res => res.json())
    .then(data => {
      console.log('bear data: ', data );
      dogResult.innerHTML = `<img src="${data.image_link}">`
    })
  
}

catBtn.addEventListener('click', getRandomCat);
dogBtn.addEventListener('click', getRandomDog);