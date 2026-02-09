// let numbers = [1, 4, 9, 16]

// function squareRoot(x){
//     return Math.sqrt(x)
// }

// let result = numbers.map(squareRoot);

// console.log(numbers)
// console.log(result)

// OR
// let result = numbers.map((x) => Math.sqrt(x))

// console.log(numbers)
// console.log(result)

// Using Filter
// let ages = [32, 15, 19, 12];

// function checkAge(x){
//     if(x > 18){
//         return true
//     }
//     else{
//         return false;
//     }
// }

// let result = ages.filter(checkAge)
// console.log(result)

// OR

// let result = ages.filter((x) => x > 18 ? true : false)
// console.log(result)

// Reduce Function
// let numbers = [1, 4, 9, 16];

// let res = numbers.reduce((total, x) => total + x, 0)
// console.log(numbers)
// console.log(res)

// let score = [85, 72, 90, 67];

// let hasGradeA = score.some((x) => x > 85);
// console.log(hasGradeA);

// let hasPassed = score.every((x) => x >= 70);
// console.log(hasPassed)

// let res1 = score.find((x) => x > 70);
// console.log(res1)

// let res2 = score.findIndex((x) => x > 85)
// console.log(res2)

let scores = [85, 67, 72, 90]
console.log(scores);

scores.sort();
console.log(scores)