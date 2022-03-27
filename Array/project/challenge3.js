const calcAverHumanAge = ages => 
  ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
      .filter(age => age >= 18)


const avg1 = calcAverHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverHumanAge([16, 6, 10, 5, 6, 1, 4])

console.log(avg1, avg2);

// (5) [36, 32, 76, 48, 28]
// (6) [80, 40, 56, 36, 40, 32]