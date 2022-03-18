// 'use strict'

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

this.garage.cleanTable()    // cleanTable() is method


//! this inside FUNCTION

// const cleanTable = function() {
//   console.log(`cleaning ${this.table}`); 
// }

// cleanTable();
//* cleaning window table!
// "this" will search in Global Scope "windows"

// and if we will use 'use strict'
// then will be an error: 
//! Uncaught TypeError: Cannot read properties of undefined (reading 'table')
//! at cleanTable


//! call function
// cleanTable(this);         //* cleaning window table!
// cleanTable.call(this);    //* cleaning window table!

const cleanTable = function(soap) {
  console.log(`cleaning ${this.table} using ${soap}`); 
}

cleanTable(this, 'some soap')
//* cleaning window table! using [object Window]


cleanTable.call(this, 'some soap')      //! .call
// cleaning window table! using some soap

// call function from global scope ...

this.garage1 = {
  table: 'garage table'  
};

cleanTable.call(this.garage1, 'some soap !')      //! .call
//* cleaning garage table using some soap !


let JohnsRoom1 = {
  table: 'Johns table'
}

cleanTable.call(JohnsRoom1, 'some soap !!!' )
//* cleaning Johns table using some soap !!!



//! this inside an inner FUNCTION

const cleanTable2 = function(soap) {

  // 1
  // let text = this;
  // 2
  const innerFunction = function (_soap) {
    // 1
    // console.log(`cleaning ${text.table} using ${_soap}`); 
    // 2
    console.log(`cleaning ${this.table} using ${_soap}`); 
  }

  // 1
  // innerFunction(soap);
  // 2
  // innerFunction.call(this, soap);   //! .call
  //3
  innerFunction.bind(this)(soap);      //! .bind


}

cleanTable2.call(this, 'some soap 2!')
// 1
//* cleaning window table! using some soap 2!

// 2 same result
//* cleaning window table! using some soap 2!

// 3
// bind creates a new function
//* cleaning window table! using some soap 2!


//! using "this" inside as ARROW innerFunction 

const cleanTableInnerArrow = function(soap) {

  const arrowInnerFunction = (_soap) => {        //! ARROW innerFunction 
    console.log(`cleaning ${this.table} using ${_soap}`); 
  }

  arrowInnerFunction(soap);      //! .bind

}

cleanTableInnerArrow.call(this, 'some soap innerArrow!')
//* cleaning window table! using some soap innerArrow!

// when we use arrow function, "this" here ${this.table} will take from outer scope - "this" будеть взят из внешней области и использовать его
//? here outer scope is "cleanTableInnerArrow" function

// we have actually 4 solutions
// .call, .bind, passing as TEXT= this, and using ARROW FUNCTION 



//! CREATE CONSTRUCTOR to produce objects
//! this inside the constructor
// constructor is a function

const cleanTableConstructor = function(soap) {
  console.log(`cleaning ${this.table} using ${soap}`); 
}

let createRoom = function(name) {
  this.table = `${name}s room`
}

const susansRoom = new createRoom('Susan');

cleanTableConstructor.call(susansRoom, 'some soap 3!')
//* cleaning Susans room using some soap 3!


//!prototype
createRoom.prototype.cleanTableConstructor = function(soap) {
  console.log(`cleaning ${this.table} using ${soap}`); 
}

susansRoom.cleanTableConstructor('some soap 4!');
//* cleaning Susans room using some soap 4!



//! this inside a class

class createRoomCl {
  constructor(name) {
    this.table = `${name}s table`
  }

  cleanTableCl(soap) {
    console.log(`cleaning ${this.table} using ${soap}`); 
  }
}

const susansRoomCl = new createRoomCl('Susan');
susansRoomCl.cleanTableCl('some soap class!')

//* cleaning Susans table using some soap class!
