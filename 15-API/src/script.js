'use strict';



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

  clicks = 0; //*property

  constructor(coords, distance, duration) {
    this.coords = coords;      //  [lat, lng]    
    this.distance = distance;  // in km 
    this.duration = duration;  // in min 
    // this._setDescription();
  }

  // workout date
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
  }

  click() {
    this.clicks++;   // +1
  }
}

// Child Classes                       //    7
class Running extends Workout {        // 7.1
  type = 'running';
  
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    // this.type = 'running';    //same : type = 'running'

    this.calcPace();            //*  call the method in the constructor to immediately calc the Pace
    this._setDescription();
  }

  // Methods
  calcPace() {
    //in min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
} 

class Cycling extends Workout {           // 7.2
  type = 'cycling'
  
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    // this.type = 'cycling'    // same: type = 'cycling'

    this.calcSpeed();
    this._setDescription();
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
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // this.workout = [];
    this._getPosition(); 
    form.addEventListener('submit', this._newWorkout.bind(this ));  // _newWorkout eventHandler function
    
    inputType.addEventListener('change', this._toggleElevationField)

    // containerWorkouts.addEventListener('click', this._moveToPopup);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));  // after error we added bind(this)
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

      this.#map = L.map('map').setView(coords, this.#mapZoomLevel);   // this.#mapZoomLevel = 13

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

  // Form 
  _hideForm() {
    // empty inputs
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

    form.style.display = 'none';
    form.classList.add('hidden');

    setTimeout(() => form.style.display = 'grid', 1000)
  }

  _toggleElevationField() {
    inputElevation
      .closest('.form__row')
      .classList.toggle('form__row--hidden')      // select parent, not children
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden')      // select parent, not children
    
  }

  _newWorkout(e) {
    e.preventDefault();

    //! helper functions for check Number and Negative
    const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));       // if we use (... ) we get an array

    const allPositive = (...inputs) => inputs.every(inp => inp > 0 )  



    // Get data from Form
    const type = inputType.value;
    const distance = +inputDistance.value;  //bcs of it coming String, we convert it to Number
    const duration = +inputDuration.value;  //bcs of it coming String, we convert it to Number

    const { lat, lng } = this.#mapEvent.latlng;    //* from (move to 8) 

    let workout; // to be available outside of BLOCK

    
    // If workout running, create running Object
    if (type === 'running') {
      const cadence = +inputCadence.value;  // + means convert to Number

      // Check if data is valid   //*
      // if the distance is no a Number, then we want to return
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence )
        // same 
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence) 
        // if all inputs are not Valid OR any Number is not Positive 

      ) {
        return alert('Inputs have to be positive numbers')
      }

      // const workout = new Running([lat, lng], distance, duration, cadence);   
      workout = new Running([lat, lng], distance, duration, cadence);   // to be available outside of BLOCK, we remove const, and redefined it
        // 1st argument: this.#mapEvent.latlng - Object - changed to [lat, lng]
        // 2,3,4th arguments: distance, duration, cadence

      // this.#workouts.push(workout) 
    }

    // If workout cycling, create cycling Object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;  // + means convert to Number

      // Check if data is valid    //* 
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)    // elevation may be negative -> down from mountain, for example
      ) {
        return alert('Inputs have to be positive numbers')
      }
      workout = new Cycling([lat, lng], distance, duration, elevation); 
    }

    // Add new Object to ro Workout array 
    this.#workouts.push(workout)
    console.log('workout: ', workout);  // check workout
    console.log('workouts: ', this.#workouts);  // check array

    // Render workout on map as marker                //* display marker
    // const { lat, lng } = this.#mapEvent.latlng;    //* move to 8
     
    this._renderWorkoutMarker(workout)     
    
    // Render workout on list
    this._renderWorkout(workout)
    
    // Hide Form And Clear Input Fields
    this._hideForm();
    // inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

    
    //todo Set Local Storage to all workouts
    this._setLocalStorage();
      
  }

  // export its own method
  _renderWorkoutMarker(workout) {
    // L.marker([lat, lng])
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 350,
        minWidth: 150,
        autoClose: false,
        closeOnClick: false,
        // className: 'running-popup'
        // className: `${type}-popup`
        className: `${workout.type}-popup`   // will be "running" or "cycling"

      }))
      // .setPopupContent('Workout')
      .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
      .openPopup();
  }

  //rendering workout
  _renderWorkout(workout) {
    let html = `
          <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">Running on ${workout.description}</h2>
            <div class="workout__details">
              <span class="workout__icon">${
                workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
              }</span>
              <span class="workout__value">${workout.distance}</span>
              <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⏱</span>
              <span class="workout__value">${workout.duration}</span>
              <span class="workout__unit">min</span>
            </div>

      `;

    if (workout.type === 'running') {
      html += `
            <div class="workout__details">
              <span class="workout__icon">⚡️</span>
              <span class="workout__value">${workout.pace.toFixed(2)}</span>  
              <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">🦶🏼</span>
              <span class="workout__value">${workout.cadence}</span>
              <span class="workout__unit">spm</span>
            </div>
          </li>
      
      `;
    }

    if (workout.type === 'cycling') {
      html += `
            <div class="workout__details">
              <span class="workout__icon">⚡️</span>
              <span class="workout__value">${workout.speed.toFixed(2)}</span>
              <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⛰</span>
              <span class="workout__value">${workout.elevationGain}</span>
              <span class="workout__unit">m</span>
            </div>
          </li>  
      `;      
    }

    form.insertAdjacentHTML('afterend', html);
  }

  // move map to Popup 
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    
    console.log('workoutEl: ', workoutEl);
    //* workoutEl:
    //* <li class=​"workout workout--running" data-id=​"6475721684">​…​</li>​ grid 

    if (!workoutEl) return;

    const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

    console.log('workout: ', workout);
    //! TypeError: Cannot read private member #workouts from an object whose class did not declare it
    // at HTMLUListElement._moveToPopup  

    this.#map.setView(workout.coords, this.#mapZoomLevel, {  
       animate: true,   // from documentation leaflet
       pan: {
         duration: 1
       } 
    });
    
    // using the public interface //*  prototype chain
    workout.click();
  }

  //todo Set Local Storage
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  };
}  

// create Object                    2
const app = new App()

// call method from App class       3
// app._getPosition();  
