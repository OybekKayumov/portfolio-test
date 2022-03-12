const catResult = document.querySelector('#catResult');
const dogResult = document.querySelector('#dogResult');
const catBtn = document.querySelector('#catBtn');
const dogBtn = document.querySelector('#dogBtn');
const divAbout = document.querySelector('.about');
const getRandomCat = ()=>{
    fetch('https://randomfox.ca/floof/').then((res)=>res.json()
    ).then((data)=>{
        console.log('fox data: ', data);
        catResult.innerHTML = `<img src="${data.image}">`;
    });
};
const getRandomDog = ()=>{
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand').then((res)=>res.json()
    ).then((data)=>{
        console.log('bear data: ', data);
        dogResult.innerHTML = `<img src="${data.image_link}">`;
        divAbout.innerHTML = `
          <p>Name: ${data.name}</p>
          <p>Latin Name: ${data.latin_name}</p>
          <p>Animal Type: ${data.animal_type}</p>
          <p>Active Time: ${data.active_time}</p>
          <p>Habitat: ${data.habitat}</p>
          <p>Diet: ${data.diet}</p>
          <p>Geo Range: ${data.geo_range}</p>
      `;
    });
};
catBtn.addEventListener('click', getRandomCat);
dogBtn.addEventListener('click', getRandomDog);

//# sourceMappingURL=fetch.817a7a10.js.map
