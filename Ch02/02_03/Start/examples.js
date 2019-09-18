const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const add5 = x => x + 5;

const myNumber = 42;

const doubled = double(myNumber);
const subtractedOne = subtractOne(myNumber);
const tripled = triple(myNumber);
const added5 = add5(myNumber);

const functionsArray = [
  double,
  subtractOne,
  triple,
  add5,
  Math.sqrt,
];

var number = 42;

functionsArray.forEach(func => number = func(number));

console.log(number);
