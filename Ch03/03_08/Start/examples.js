const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];

console.log(numbers);

const sum = numbers.reduce((acc, element) => {
  console.log(`acc is ${acc}`);
  console.log(`element is ${element}`);
  return acc + element;
}, 0);

console.log(sum);


const product = numbers.reduce((acc, element) => {
  console.log(`acc is ${acc}`);
  console.log(`element is ${element}`);
  return acc * element;
}, 1);

console.log(product);
