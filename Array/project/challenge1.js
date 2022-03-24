const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCorrected = dogsJulia.slice(); //* copy of arr
  dogsJuliaCorrected.splice(0, 1);  //* [5, 2, 12, 7]
  dogsJuliaCorrected.splice(-2);      //* [5, 2]

  // same as
  // console.log(dogsJuliaCorrected.slice(1, 3)); //* [5, 2]
  // console.log(dogsJuliaCorrected); //* [5, 2]

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log('dogs: ', dogs);
  //* dogs:  (7) [5, 2, 4, 1, 15, 8, 3]

  dogs.forEach((dog, index) => {
    if (dog >= 3) {
      console.log(`Dog number ${index + 1} is an adult and it is ${dog} years old`);
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶 (${dog} years old)`);
    }
  }) 
}

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])  //*(7) [5, 2, 4, 1, 15, 8, 3]
       //arr: dogsJulia,        dogsKate
//test
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])   //*(7) [16, 6, 10, 5, 6, 1, 4]