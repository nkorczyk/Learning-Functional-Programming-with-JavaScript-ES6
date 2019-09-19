// const map = (arr, func) => {
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     const result = func(arr[i]);
//     newArray.push(result);
//   }

//   return newArray;
// };

// const map = (arr, func) =>
//   arr.reduce((acc, x) => {
//     console.log(`acc is ${acc}`);
//     console.log(`x is ${x}`);
//     return [
//       ...acc,
//       func(x),
//     ]
//   }, []);

const map = (arr, func) =>
  arr.reduce((acc, x) =>
    [
      ...acc,
      func(x),
    ], []);


// testing if it works:

// Should be [2, 4, 6]
console.log(map([1, 2, 3], x => x * 2));

// Should be [-5, -6, -7, -8, -9, -10]
console.log(map([5, 6, 7, 8, 9, 10], x => -x));

// Should be ['A', 'B', 'C', 'D']
console.log(map(['a', 'b', 'c', 'd'], x => x.toUpperCase()));
