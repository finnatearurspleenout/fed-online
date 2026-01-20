// 1. Створення класу та об'єкта:


class Person {
    constructor(name, age, sayHello) {
        this._name = name;
        this._age = age;
        this._sayHello = sayHello;
    }

    sayHello() {
        console.log(`Hello, my name is ${this._name}`);
    }
}

let person1 = new Person('John', 30);
console.log(person1._name);
console.log(person1._age);
console.log('---');

// 2. Методи класу:

person1.sayHello();

// 3. Наслідування класів:
console.log('---');

class Student extends Person {
    constructor(name, age, sayHello, studentId) {
        super(name, age, sayHello);
        this._studentId = studentId;
    }
    study() {
        console.log(`${this._name} is studying`);
    }
}

let student1 = new Student('John', 20, '12345');
student1.sayHello();
student1.study();