let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]

numbers.sort((a, b) => a - b)
console.log(numbers);

console.log(numbers.slice(1,4));

numbers.splice(numbers.length, 0, "i")
console.log(numbers);