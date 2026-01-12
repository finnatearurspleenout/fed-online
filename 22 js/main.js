// 1. Визначення типу геометричної фігури за допомогою switch:

let shape = "квадрат";

switch (shape) {
    case "трикутник":
        console.log("Фігура є трикутником. Трикутник має 3 сторони.");
        break;
    case "квадрат":
        console.log("Фігура є квадратом. Квадрат має 4 сторони.");
        break;
    case "коло":
        console.log("Фігура є колом. Коло має 0 сторін.");
        break;
    default:
        console.log("Невідома фігура.");
}

// 2. Підрахунок суми парних чисел:

// for (let i=0; i<=10; i++) {
//     if (i%2 === 0) {
//         console.log(`Парне число: ${i}`);
//     }
// }

let sum = 0;
for (let i=0; i<=20; i++) {
    if (i%2 === 0) {
        sum += i;
    }
}
console.log(`Сума парних чисел від 0 до 20: ${sum}`);

// 3. Таблиця множення:

for (let i=1; i<=10; i++) {
    let row = 5;
    let result = i * row;
    console.log(`${row}*${i} = ${result}`);
}

// 4. Зворотний лічильник:

for (let i=10; i>=0; i--) {
    console.log(i);
}

// 5. Визначення чи є число парним чи непарним:

let number = 5;
if (number%2 === 0) {
    console.log(`${number} є парним числом.`);
} 
else {
    console.log(`${number} є непарним числом.`);
}

// 6. Знаходження першого парного числа:

for (let i=1; i<=10; i++) {
    if (i%2 === 0) {
        console.log(`Перше парне число: ${i}`);
        break;
    }
}

// 7. Виведення парних чисел:

for (let i=1; i<=10; i++) {
    if (i%2 !==0) {
        continue;
    }
    console.log(`Парне число: ${i}`);
}