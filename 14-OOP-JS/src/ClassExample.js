// 1
// class Account {
//   constructor(owner, currency, pin, movements) {
//     this.owner = owner;
//     this.currency =currency;
//     this.pin = pin;
//     this.movements = movements;
//   }
// }

// const accoun1 = new Account('Jonas', 'EUR', 1111, [])

// console.log('account 1: ', accoun1);
//* Account {
  // owner: 'Jonas',
  // currency: 'EUR',
  // pin: 1111,
  // movements: Array(0)
  // }
  
  // 2
  //! but we can write like this
  
  class Account {
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency =currency;
      // this.pin = pin;
      //! 10 protect pin
      this._pin = pin;
      // this.movements = [];
      //! 9 PROTECTED property
      this._movements = [];

      // 3
      this.locale = navigator.language;

      // 4
      console.log(`Thanks for opening an Account, ${owner}!`);
    }
    
    // Public Interface of Object

    // 10

    getMovements() {
      return this._movements;
    }

    // 6 add method to push POSITIVE value
    
    deposit(val) {
      // this.movements.push(val)
      //! 9 PROTECTED property
      this._movements.push(val)
    }

    // 6.1 add method to push NEGATIVE value
    //! we call method DEPOSITE
    withdraw(val) {
      this.deposit(-val)
    }

    // 8 //10
    _approveLoan(val) {
      return true;
    }

    requestLoan(val) {
      if (this._approveLoan(val)) {  //* 10
        this.deposit(val);
        console.log('Loan approved');
      }
    }
  }
  
  const account1 = new Account('Jonas', 'EUR', 1111)
  console.log('account 1: ', account1);
  //* account 1:  
  // Account {
    //   owner: 'Jonas', 
    //   currency: 'EUR', 
    //   pin: 1111, 
    //   movements: Array(0),   //! added in output
    //   locale: 'ru-RU'        //! added in output 
    // }
    
// 4
//* Thanks for opening an Account, Jonas!

// 5 work with array: movements
//? account1.movements.push(250);
//? account1.movements.push(-150);
console.log('account 1: ', account1);

//* account 1:  
// Account {owner: 'Jonas', currency: 'EUR', pin: 1111, movements: Array(2), locale: 'ru-RU'}
// currency: "EUR"
// locale: "ru-RU"
// movements: (2) [250, -150]  //!
// owner: "Jonas"
// pin: 1111
// [[Prototype]]: Object

//todo 6 better add new method into class to add data to array
account1.deposit(350);
account1.withdraw(140)
console.log('account 1: ', account1);

//* account 1:  
// Account {owner: 'Jonas', currency: 'EUR', pin: 1111, movements: Array(2), locale: 'ru-RU'}
// currency: "EUR"
// locale: "ru-RU"
// movements: (2) [350, -140]  //!
// owner: "Jonas"
// pin: 1111
// [[Prototype]]: Object

// 7 pin
console.log('pin: ', account1.pin);

// 8
account1.requestLoan(1000);
//* Loan approved

//! 9 encapsulate and protect data 
//! _movements don't makes truly private, so we call it PROTECTED

// account1._movements.push(250);
// account1._movements.push(-150);
// console.log('account 1: ', account1);
//* _movements: (5) [350, -140, 1000, 250, -150]

// this property now it not suppose be touched outside of the class
//! but steel it is a wrong!

// 10 get access to variable
// correct way to get movements, but cannot override them
// cannot set movements
console.log(account1.getMovements() )
//* [350, -140, 1000]

// 10 protect pin