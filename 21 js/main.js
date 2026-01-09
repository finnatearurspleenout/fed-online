// 1. Порівняння трьох чисел:

let typeFirstNumber = Number(prompt('Введіть число: '));
let typeSecondNumber = Number(prompt('Введіть число: '));
let typeThirdNumber = Number(prompt('Введіть число: '));

if(typeFirstNumber>=typeSecondNumber && typeFirstNumber>=typeThirdNumber) {
    console.log('firstNumber найбільше число')
}
else if(typeSecondNumber>=typeFirstNumber && typeSecondNumber>=typeThirdNumber) {
    console.log('secondNumber найбільше число')
}
else {
    console.log('thirdNumber найбільше число')
}

// // 2. Визначення сезону:

let firstValue = Number(prompt('Введіть номер місяця від 1 до 12: '));

if(firstValue >=1 && firstValue<=12) {
    if(firstValue >=3 && firstValue<=5) {
        console.log('Весна');
    }
    else if(firstValue >=6 && firstValue<=8) {
        console.log('Літо');
    }
    else if(firstValue >=9 && firstValue<=11) {
        console.log('Осінь');
    }
    else {
        console.log('Зима');
    }
}
else {
    console.log('Некоректний номер')
}

// 3. Визначення розміру числа:

let typeNumber = Number(prompt('Введіть будь яке число: '));

if(typeNumber===0) {
    console.log('Число дорівнює нулю');
}

else if(typeNumber>=1) {
    console.log('Число є додатнім');
}

else if(typeNumber<=1) {
    console.log("Число є від'ємним");
}
else {
    console.log('Некоректне значення');
}

// 4. Перевірка величини кута:

let value = Number(prompt('Введіть величину кута в градусах: '));
let typeValue = (value>0 && value<90)? 'Гострий кут':'Тупий кут';
console.log(`${typeValue}`);

// 5. Оцінка студента:

let ratingValue = Number(prompt('Введіть вашу оцінку за тест від 0 до 100: '));

if(ratingValue>=90 && ratingValue<=100) {
    console.log('Ваша оцінка А')
}
else if(ratingValue>=80 && ratingValue<=89) {
    console.log('Ваша оцінка B')
}
else if(ratingValue>=70 && ratingValue<=79) {
    console.log('Ваша оцінка C')
}
else if(ratingValue>=60 && ratingValue<=69) {
    console.log('Ваша оцінка D')
}
else {
    console.log('Ваша оцінка F')
}

console.log('Ваш бал до: ' + ratingValue);
console.log("Врахування 1 балу (постфікс): " + ratingValue++);
console.log("Ваша остаточна оцінка: " + ratingValue);

let result = (ratingValue >=60)? 'Студент зарахований':'Студент не зарахований';
console.log('Статус: ' + result);