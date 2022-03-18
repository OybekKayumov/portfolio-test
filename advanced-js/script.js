// Javascript this keyword explained in
// Global Scope,
// Object, 
// Function,
// Prototype, 
// Method, 
// Class

//! this inside Global Scope
// house
this.table = 'window table!';
console.log(window.table);

this.garage = {
  table: 'garage table',
  cleanTable() {
      console.log(`cleaning ${this.table}`);
  }
};

console.log(this.garage.table);
// or
console.log(window.garage.table);

// window is GLOBAL SCOPE


//! this inside OBJECT
let JohnsRoom = {
  table: 'Johns table'
}

// we cannot use this in private variables
// console.log(this.JohnsRoom.table);
//! Uncaught TypeError: Cannot read properties of undefined (reading 'table')

// we can use like this:
// console.log(JohnsRoom.table);


//! this inside METHOD
// create method inside JohnsRoom

let JohnsRoomMethod = {
    table: 'Johns table', 
    cleanTable() {    //? cleanTable() is METHOD
      console.log(`cleaning ${this.table}`);
    }
}

console.log(JohnsRoomMethod.table);
//* Johns table

// console.log(JohnsRoomMethod.cleanTable());

JohnsRoomMethod.cleanTable()
//* cleaning Johns table

this.garage.cleanTable()