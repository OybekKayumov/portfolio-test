// USE MAP, FILTER, REDUCE

const calcAverHumanAge = (ages) => {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
  const adults = humanAges.filter(age => age >=18);  //* adults is a new array
  // console.log(humanAges);
  // console.log(adults);
  
   //* start from 0
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length 
  
  // (2+3)/2 = 2/2 + 3/2 ===2.5
  //* same
  const average = adults.reduce((acc, age, index, arr) => acc + age / arr.length, 0) 
  
  return average;
}

const avg1 = calcAverHumanAge([5, 2, 4, 1, 15, 8, 3])
// (7) [36, 4, 32, 2, 76, 48, 28]
// (5) [36, 32, 76, 48, 28]     //*  - 4 and 2

const avg2 = calcAverHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2);

// (7) [80, 40, 56, 36, 40, 2, 32]
// (6) [80, 40, 56, 36, 40, 32]

// 44 47.333333333333336