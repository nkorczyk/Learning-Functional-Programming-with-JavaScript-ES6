const employees = [{
  name: 'John Olsen',
  age: 54,
  jobTitle: 'developer',
  salary: 70000,
}, {
  name: 'Karen Norris',
  age: 34,
  jobTitle: 'engineer',
  salary: 75000,
}, {
  name: 'Daryl Cline',
  age: 25,
  jobTitle: 'secretary',
  salary: 54000,
}, {
  name: 'Abbey Garcia',
  age: 40,
  jobTitle: 'developer',
  salary: 100000,
}, {
  name: 'Finn Smith',
  age: 29,
  jobTitle: 'engineer',
  salary: 40000,
}, {
  name: 'Eve Wordsworth',
  age: 20,
  jobTitle: 'developer',
  salary: 65000,
}, {
  name: 'Ronald Jacobs',
  age: 60,
  jobTitle: 'developer',
  salary: 90000,
}];

const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .map(x => x * 2)
  .filter(x => x > 5)
  .reduce((acc, x) => acc + x);

// console.log(result);

const developers = employees.filter(employee => employee.jobTitle === 'developer');
// console.log(developers);

const developerSalaries = developers.map(developer => developer.salary);
// console.log(developerSalaries);

const totalDeveloperSalaries = developerSalaries.reduce((acc, x) => acc + x, 0);

console.log(totalDeveloperSalaries);

const average = totalDeveloperSalaries / developerSalaries.length;

console.log(average);

const nonDevelopers = employees.filter(employee => employee.jobTitle !== 'developer');
const nonDeveloperSalaries = nonDevelopers.map(nonDev => nonDev.salary);
const totalNonDeveloperSalaries = nonDeveloperSalaries.reduce((acc, x) => acc + x, 0);
const averageNonDevSalaries = totalNonDeveloperSalaries / nonDeveloperSalaries.length;
console.log(averageNonDevSalaries);
