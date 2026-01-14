// push 
// 1

let items = [];
items.push('Яблоко');
items.push('Банан', 13, true);
console.log(items);

// 2

function addItem(arr, item) {
    arr.push(item);
    return arr;
}

let item = ['item1', 'item2'];
console.log(addItem(item, 'item3'));

// pop
// 1

let fruits = ['Яблоко', 'Банан', 'Вишня'];
fruits.pop();
console.log(fruits);

// 2

function removeLastItem(vegetables) {
    vegetables.pop();
    return vegetables;
}

let vegetables = ['Морква', 'Броколі', 'Гриб'];
console.log(removeLastItem(vegetables));

// unshift
// 1

let colors = ['Червоний', 'Зелений'];
colors.unshift('Синій');
console.log(colors);

// 2

function addFirstItem(arr, animals) {
    arr.unshift(animals);
    return arr;
}

let animals = ['Кіт', 'Собака'];
console.log(addFirstItem(animals, 'Лисиця'));

// shift
// 1

let color = ['Червоний', 'Зелений'];
color.shift();
console.log(color);

// 2

function removeFirstItem(cars) {
    cars.shift();
    return cars;
}

let cars = ['BMW', 'Audi', 'Mercedes'];
console.log(removeFirstItem(cars));

// fill 
// 1

let fillArray = new Array(5);
fillArray.fill(true);
console.log(fillArray);

// 2

function fillArr(length, value) {
    let newArray = new Array(length);
    newArray.fill(value);
    return newArray;
}
let length = 4;
let value = 'Hello';
console.log(fillArr(length, value));


// splice 
// 1

let spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(2, 1);
console.log(spliceArr);

// 2

function removeItems(arr, numbers, count) {
    arr.splice(numbers, count);
    return arr;
}

let numbers = [10, 20, 30, 40, 50];
let count = 2, index = 1;
console.log(removeItems(numbers, index, count));

// reverse 
// 1

let reverseArr = [1, 2, 3, 4, 5];
reverseArr.reverse();
console.log(reverseArr);

// 2

function reverseArray(arrReverse) {
    arrReverse.reverse();
    return arrReverse;
}

let arrReverse = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(arrReverse));

// concat 
// 1

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray);

// 2

function combineArrays(firstArr, secondArr) {
    return firstArr.concat(secondArr);
}

let firstArr = [1, 2, 3];
let secondArr = [7, 8, 9];
console.log(combineArrays(firstArr, secondArr));

// includes 
// 1

let includesArr = ['Яблуко', 'Банан', 'Вишня'];
let hasBanana = includesArr.includes('Банан');
let hasJuice = includesArr.includes('Сік');
console.log(hasBanana);
console.log(hasJuice);

// 2

function checkIncludes(arr, banana) {
    return arr.includes(banana);
}

let includeArr = ['Яблуко', 'Банан', 'Вишня'];
console.log(checkIncludes(includeArr, 'Банан'));
console.log(checkIncludes(includeArr, 'Сік'));

// filter 
// 1

let filterArr = [10, 15, 20, 25, 30, 35, 40];
let filtered = filterArr.filter(value => value % 2 === 0);
console.log(filtered);

// 2

function filterEvenNumbers(arr) {
    return arr.filter(value => value % 2 === 0);
}

let numbersArr = [11, 22, 33, 44, 55, 66];
console.log(filterEvenNumbers(numbersArr));

// map 
// 1

let mapArr = [1, 2, 3, 4, 5];
let newMapArr = mapArr.map(value => value * value);
console.log(newMapArr);

// 2

function mapToString(arr, converter) {
    return arr.map(converter);
}

function toString(value) {
    return value.toString();
}

let numArr = [1, 2, 3, 4, 5, true];
let converter = value => value.toString();
console.log(mapToString(numArr, converter));
