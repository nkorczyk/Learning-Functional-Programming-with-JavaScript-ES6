const divide = (x, y) => x / y;

const secondArgumentIsNotZero = func =>
  (...args) => {
    if (args[1] === 0) {
      console.log("Dividing by 0");
      return null;
    }

    return func(...args);
  };

const divideSafe = secondArgumentIsNotZero(divide);

console.log(divideSafe(7, 0));
console.log(divideSafe(6, 3));
