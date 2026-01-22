
// // 1 

function game() {
    let gameValue = ['камінь', 'ножиці', 'папір'];
    let userValue = prompt('Введіть камінь, ножиці або папір:').toLowerCase().trim();
    let computerValue = gameValue[Math.floor(Math.random()*3)];

    if (!gameValue.includes(userValue)) {
        alert('Виберіть правильне значення');
        return;
    }

    if (computerValue === userValue) {
        alert(`Нічия`);
    }

    else if (
        (computerValue === 'Камінь' && userValue === 'Ножиці') ||
        (computerValue === 'Ножиці' && userValue === 'Папір') ||
        (computerValue === 'Папір' && userValue === 'Камінь')
    ) {
        alert('Ви програли');
    }

    else {
        alert('Ви виграли');
    }
    alert(`Комп'ютер вибрав ${computerValue}`);
}

game();

// 2

let max = Math.max(10, 5, 20, 8);
console.log(max);
let min = Math.min(10, 5, 20, 8);
console.log(min);

// 3 
console.log('---');

let a = Math.pow(5,2);
console.log(a);

// 4

let floor = Math.floor(4.7);
console.log(floor);
console.log('Random floor');
console.log(Math.floor(Math.random()*5));

let ceil = Math.ceil(4.3);
console.log(ceil);
console.log('Random ceil');
console.log(Math.ceil(Math.random()*5));

console.log('---');

// 5

let newYear = new Date();
console.log(newYear);
console.log('---');

function yearOfBirth(age) {
    let userYear = new Date().getFullYear();
    return userYear - age;
}

let age = Number(prompt('Введіть ваш вік'));
alert(`Ваш рік народження ${yearOfBirth(age)}`);
console.log('---');

// 6

let dateAndTime = new Date();
console.log(dateAndTime.toLocaleString());

// 7
console.log('---');

let string = 'Текст Розділений Пробілами';
let upperString = string.toUpperCase();
console.log(upperString);
let splitString = string.split(' ');
console.log(splitString);
console.log(string);

