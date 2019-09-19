const sum = x => y => z => x + y + z;

const add = sum(5)(6)(7);
// console.log(add);

const map = (arr, func) =>
arr.reduce((acc, x) => [
  ...acc,
  func(x),
], []);

const double = map([2, 3, 4], x => x * 2);
// console.log(double);

// Recursion
const countDown = x => {
  if (x < 0) return;
  console.log(x);
  countDown(x - 1);
};

// countDown(10);

const countUp = (x, max) => {
  if (x > max) return;
  console.log(x);
  countUp(x + 1, max);
};

countUp(10, 100);
