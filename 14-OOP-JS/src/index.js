'use strict';

const Person = function(firstName, birthYear) {
  
  console.log(this);
} 

new Person('Jonas', 1991);
