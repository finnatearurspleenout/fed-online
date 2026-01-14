// 1. Калькулятор 

function calculator() {
    let a = Number(prompt("Введіть перше число:"));
    let operation = prompt("Введіть операцію (+, -, *, /):");
    let b = Number(prompt("Введіть друге число:"));
    let result;
    if (operation === "/" && b === 0) {
        alert("Ділення на 0 заборонено");
        return;
    }
    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            alert("Невідома операція");
            return;
    }
    alert(`Результат: ${result}`);
}

calculator();

// 2. Параметри та колбеки:

function wellcomeUser(users, hiUser) {
    for (let user of users) {
        hiUser(user);
    }
}

function hiUser(user) {
    console.log(`Вітаю ${user}`);
}

let users = ['Tom', 'Bob', 'Sam'];
wellcomeUser(users, hiUser);

// 3. Стрілкові функції:

let wellcomeUsers = (users, hiUser) => {  
    if(users>hiUser){
        return users+hiUser;
    }
    else {
        return hiUser-users;
    }
};

console.log(`${wellcomeUsers(13,30)}`);

// 4. Параметри за замовчуванням:

function greet(name = "Nick") {
    console.log(`Вітаю ${name}!`);
}

greet();
greet("Tomas");

// 5. Задача з колбеком:

function string(str, callback) {
    callback(str);
}
string(`Hello ${users}`, function(str) {
    console.log(str);
});

// 6. Перепишіть стрілкову функцію в звичайну 
// const multiplyValues = (a, b, c) => a * b * c;

function multiplyValues(a, b, c) {
    return a * b * c;
}
console.log(multiplyValues(2, 3, 4));