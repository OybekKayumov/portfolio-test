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
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
       //arr: dogsJulia,        dogsKate