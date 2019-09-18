const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2And3 = func => func(2, 3);

combine2And3(add); // 5
combine2And3(subtract); // -1

const result = combine2And3(Math.max);
console.log(result);

const result2 = combine2And3((x, y) => x * y);
console.log(result2);
