
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private Methods
// (there is also the static version)

class Account {

  //! 1) Public fields (instances):
  // it means these 2 properties will be in all NEW created Objects automatically
  // they are not on the PROTOTYPE
  //THIS IS IMPORTANT TO UNDERSTAND
  locale = navigator.language;
  // _movements = [];
  
  //! 2) Private fields:
  // is one we have actually been waiting for
  // not accessible from outside
  #movements = [];
  // 2
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency =currency;

    // this._pin = pin;
    this._pin = pin;  //* redefine //2

    // this._movements = [];

    // this.locale = navigator.language;

    console.log(`Thanks for opening an Account, ${owner}!`);
  }
  
  //! 3) Public methods
  // Public Interface of Object

  getMovements() {
    return this.#movements;
  }
  
  deposit(val) {
    this.#movements.push(val)
    return this;    //! 5
  }

  //! we call method DEPOSITE
  withdraw(val) {
    this.deposit(-val)
    return this;    //! 5
  }

  

  requestLoan(val) {
    // if (this.#approveLoan(val)) {  //* 3
    if (this._approveLoan(val)) {  
      this.deposit(val);
      console.log('Loan approved');
      return this;    //! 5
    }
  }

  // Static Method // 4
  static helper() {
    console.log('Helper');
  }

  //! 4) Private Methods
  // #approveLoan(val) {  //* 3
  _approveLoan(val) {
    return true;
  }

}
  
const account1 = new Account('Jonas', 'EUR', 1111)
account1.deposit(250)
account1.withdraw(140)
account1.requestLoan(1000)
console.log(account1.getMovements());

console.log('account 1: ', account1);

// console.log(account1.#movements);
//! Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class

//todo 2 private pin
// console.log(account1.#pin);
//! PIN now also not accessible:
//* Uncaught SyntaxError: Private field '#pin' must be declared in an enclosing class

//! this is truly private



// 3 how to private methods
// console.log(account1.#approveLoan(1000));
//! SyntaxError
//* Uncaught SyntaxError: Private field '#approveLoan' must be declared in an enclosing class



// 4 Static
Account.helper();
//* helper


//todo 5 Chaining
account1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000)
//! TypeError:
// Uncaught TypeError: Cannot read properties of undefined (reading 'deposit')

//* output
// #movements: Array(8)
// 0: 250
// 1: -140
// 2: 1000
// 3: 300
// 4: 500
// 5: -35
// 6: 2500
// 7: -4000
// length: 8

console.log(account1.getMovements());
// (8) [250, -140, 1000, 300, 500, -35, 2500, -4000]