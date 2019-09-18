const Person = ({ name, age, job }) => {
  var _name = name;
  var _age = age;
  var _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,
    setJob: newJob => _job = newJob,
  };
};

const me = Person({
  name: 'Jon',
  age: 25,
  job: 'developer',
});

console.log(me.getName());
console.log(me.getJob());

me.setJob('senior dev');

console.log(me.getJob());
