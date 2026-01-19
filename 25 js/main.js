for (let i = 0; i < 5; i++) {
    console.log(i);
}

let message = 'test';

function example() {
    if (true) {
        const message = 'Hello, world!';
        console.log(message);
    }
    console.log(message);
}

example();

// Завдання 2.

const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (const key in person) {
    if (!person.hasOwnProperty(key)) {
        console.log(`${key} info ${person[key]} and name is ${person.name}`);
        continue;
    }
}

console.log('---');

for (const key in person) {
    console.log(`his ${key} is ${person[key]}`);
}


// Завдання 3. 
console.log('---');

const students = [
    {name: 'Alice', age: 20, grade: 'A'},
    {name: 'Bob', age: 22, grade: 'B'},
    {name: 'Charlie', age: 21, grade: 'C'}
];

for (const value of students) {
    console.log(`Student ${value.name} is ${value.age} years old and has grade ${value.grade}`);
}

console.log('---');

for (const key in students) {
    if (!students.hasOwnProperty(key)) {
        console.log(`Index ${key} info: Name is ${students[key].name}, Age is ${students[key].age}, Grade is ${students[key].grade}`);
    }
}