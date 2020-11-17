import {Employee, PartTimeEmployee} from './controller';
import {employeeIdGenerator, employeeTaskGenerator} from './services';
import {employeeTasks} from './helpers/consts';

const _employeeIdGenerator = employeeIdGenerator();
const _employeeTaskGenerator = employeeTaskGenerator(...employeeTasks);

const emp1 = new Employee(
  'Jake',
  'Keenan',
  27,
  undefined,
  _employeeIdGenerator.next().value
);

const emp2 = new Employee(
  'Liam',
  'Keenan',
  undefined,
  undefined,
  _employeeIdGenerator.next().value
);
emp2.addJob('Footballer');
emp2.removeJob('walk Boson');
emp2.setAge(22);

const emp3 = new Employee(
  'Hannah',
  'Keenan',
  undefined,
  undefined,
  _employeeIdGenerator.next().value
);
emp3.setAge(21);
emp3.setJobs(['Shop Keeper']);

let tasksAssigned = false;
let counter = 0;
while (!tasksAssigned) {
  const task: IteratorResult<string> = _employeeTaskGenerator.next();
  tasksAssigned = task.done ?? false;
  if (!tasksAssigned) {
    counter++;
    if (counter === 1) {
      emp1.addJob(task.value);
    }
    if (counter === 2) {
      emp2.addJob(task.value);
    }
    if (counter === 3) {
      counter = 0;
      emp3.addJob(task.value);
    }
  }
}

const emp4 = new PartTimeEmployee(
  'Liam',
  'Keenan',
  30,
  undefined,
  _employeeIdGenerator.next().value,
  9
);

emp1.display();
emp2.display();
emp3.display();
emp4.display();

// import { Person, Animal } from "./models";
// const person: Person = {
// 	name: 'Jake',
// 	age: 27,
// 	hungry: true
// }
// console.log({person});
// const animal1: Animal = {
// 	name: 'Free Willy',
// 	type: {
// 		ocean: 'Irish',
// 		numberOfTeeth: 500
// 	}
// }
// console.log({animal1});
// const animal2: Animal = {
// 	name: 'Boson',
// 	type: {
// 		bread: 'Lab',
// 		dogAge: 13
// 	}
// }
// console.log({animal2});
// // Classes
//import {Dog, Snake, Horse} from './controller';
// const dog = new Dog('Boson');
// dog.bark();
// dog.move(10);
// const snake = new Snake('Jake the Snake');
// snake.move();
// snake.display();
// snake.poke();
// const horse = new Horse('JimJam');
// horse.move();
// horse.display();
