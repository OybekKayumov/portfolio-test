'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// let map, mapEvent;       //   5

// implement Parent Class for both Workout types
class Workout {            //    6  
  //for each Workout object we want a Date object is created
  // also we need ID
  date = new Date();
  id = (Date.now() + '').slice(-10) //* 1 take data, 2 convert to string, 3 take last 10 numbers

  constructor(coords, distance, duration) {
    this.coords = coords;      //  [lat, lng]    
    this.distance = distance;  // in km 
    this.duration = duration;  // in min 
  }
}

// Child Classes                       //    7
class Running extends Workout {        // 7.1
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();            //*  call the method in the constructor to immediately calc the Pace
  }

  // Methods
  calcPace() {
    //in min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
} 

class Cycling extends Workout {           // 7.2
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;

    this.calcSpeed();
  }

  calcSpeed() {
    // in km/h
    this.speed = this.distance / (this.duration / 60 )    //* in min
    return this.speed
  }
}

//todo test working Classes
// const run1  = new Running([39, -12], 5.2, 24, 178)   //* 5.2km, 24min, 178steps per min
// const cycling1  = new Cycling([39, -12], 27, 95, 523)
// console.log(run1, cycling1);


// APPLICATION ARCHITECTURE
class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition(); 
    form.addEventListener('submit', this._newWorkout.bind(this ));  // _newWorkout eventHandler function
    
    //
    inputType.addEventListener('change', this._toggleElevationField)
  }

  _getPosition() {
    // test browser
    if (navigator.geolocation) 
     navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
        
      function() {
        alert('Could not get your position!')
      })
  }

  _loadMap(position) {

      console.log('position: ', position);      // 1
      // const latitude = position.coords.latitude;
      const { latitude }  = position.coords;  //* use destructuring
      const { longitude }  = position.coords;  //* use destructuring
    
      console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      // create array
      const coords = [latitude, longitude];

      this.#map = L.map('map').setView(coords, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);
    
    // with this function we can take coordinates of pressed point on the map
    // Handling clicks on map
    // map.on('click', function(mapEvent) {
      this.#map.on('click', this._showForm.bind(this))

    }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus(); 
  }

  _toggleElevationField() {
    inputElevation
      .closest('.form__row')
      .classList.toggle('form__row--hidden')      // select parent, not children
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden')      // select parent, not children
    
  }

  _newWorkout(e) {
    e.preventDefault();

    // Get data from Form

    // Check if data is valid

    // If activity running, create running Object

    // If activity cycling, create cycling Object

    // Add new Object to ro Workout array
    
      // Clear input fields
      inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    
      // display marker
      const { lat, lng } = this.#mapEvent.latlng; 
    
      L.marker([lat, lng]).addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 350,
        minWidth: 150,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup'
      }))
      .setPopupContent('Workout')
      .openPopup();
    
  }
}

// create Object                    2
const app = new App()

// call method from App class       3
// app._getPosition();  
