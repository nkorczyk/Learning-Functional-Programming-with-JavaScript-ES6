const createPrinter = () => {
  const myNumber = 42;

  return () => console.log(`My number: ${myNumber}`);
};

// createPrinter()();

const printer = createPrinter();

printer();
