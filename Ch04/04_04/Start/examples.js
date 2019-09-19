const sayHello = () => console.log('Hello');
console.log(sayHello.name);

const add = (x, y, z) => x + y + z;
console.log(add.length);

const addPartial = x => y => z => x + y + z;
console.log(addPartial.length);
console.log(addPartial.toString());

console.log(add.call(null, 1, 2, 3));
console.log(add.apply(null, [1, 2, 3]));

const args = [1, 2, 3];
console.log(add(...args));

// console.log(add.bind(null, 1));

const add1 = add.bind(null, 1)
console.log(add1(2, 3));
