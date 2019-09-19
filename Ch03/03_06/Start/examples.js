const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.sort(); // mutation
// numbers.reverse(); // mutation
// numbers.push(8); // mutation
// numbers.pop(); // mutation

console.log(numbers.slice(3, 8));
console.log(numbers.slice().reverse());
console.log(numbers);

console.log([...numbers].reverse());
console.log(numbers);
