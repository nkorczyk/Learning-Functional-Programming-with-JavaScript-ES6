const sayHello = name => console.log(`Hello ${name}`);

const sayHello2 = sayHello;

sayHello2('Jon');

const myFunction = true
  ? () => console.log('First option')
  : () => console.log('Second option');

const DEVELOPMENT = true;

const fetchDataReal = () => {
  // operation
};

const fetchDataFake = () => ({
  name: 'Jon',
  age: 35,
});

const fetchData = DEVELOPMENT
  ? fetchDataFake()
  : fetchDataReal();

