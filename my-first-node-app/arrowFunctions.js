const numbers = [3, 4, 12, 56, 23, 18, 1, 0, 4, 5];
console.log(numbers);

// const smallNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 10) {
//         smallNumbers.push(numbers[i]);
//     }
// }

const smallNumbers = numbers.filter(number => number < 10);

console.log(smallNumbers);