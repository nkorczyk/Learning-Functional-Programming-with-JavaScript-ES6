const person = {
  name: 'Jimmy Smith',
  age: 40,
  hairColor: 'brown',
  eyeColor: 'blue',
};

const careerData = {
  name: 'Bob',
  title: 'developer',
  company: 'ABC Software',
};

const personWithCareer = {
  ...person,
  ...careerData,
};

console.log(personWithCareer);

const updates = {
  name: 'James',
};

const updatedPerson = {
  ...person,
  ...updates,
};

console.log(updatedPerson);

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [
  ...numbers,
  6,
];

console.log(newNumbers);
