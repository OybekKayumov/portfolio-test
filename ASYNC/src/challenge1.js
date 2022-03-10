// const whereAmI = function(lat, lng) {
//   // fetch(`https://geocode.xyz/51.50354,-0.12768?geoit=`)
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       console.log('res: ', res);
//       return res.json()
//     })
//     .then(data => {
//       console.log('data: ', data);  
//     }) 
// }

const whereAmI = function(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      console.log('res: ', res);

      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`) 
      return res.json()
    })    
    .then(data => {
      console.log('data: ', data);
      console.log(`You are in ${data.city}, ${data.country}`);  
    })
    .catch(err => console.error(`${err.message} 💥`)) 

}

whereAmI(52.508,13.381); 
whereAmI(19.037,72.873); 
whereAmI(-33.93,18.474); 