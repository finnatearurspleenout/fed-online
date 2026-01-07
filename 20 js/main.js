// 1 Логічні оператори  порівняння та alert

let number1 = 10;
let number2 = 20;

console.log(`result 10 and 20 ${10==20}`);
console.log(`result 10 and 20 ${10===20}`);
console.log(`result 10 and 20 ${10!=20}`);
console.log(`result 10 and 20 ${10!==20}`);

let twoNumbers = (number1 === number2);
alert('are the numbers even?' + twoNumbers);

// 2 Метод вводу інформації та логічні порівняння

let userInput = prompt('type number');
let number = Number(userInput);

let isEven = (number % 2 === 0);

console.log('is the number even?' + isEven);

// 3 Логічні порівняння та введення-виведення

let userAge = prompt('how old are u?');
let isMinor = Number(userAge) >= 18;

alert('permission to use the resource: ' + isMinor);

// 4 Розрахунок вартості товару та console.log

let price = prompt('type price of the product');
let quantity = prompt('quantity of the product');

let totalCost = Number(price) * Number(quantity);

console.log('total cost of the product: ' + totalCost);

// 5 Розрахунок знижки на товар та alert

let originalPrice = prompt('type original price of the product');

let discount = Number(originalPrice) * 0.5;
let finalPrice = Number(originalPrice) - discount;

alert('ur discount is ' + discount + ' amount due ' + finalPrice);
