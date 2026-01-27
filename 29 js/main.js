// 1

let secElement = document.getElementById('main-section');
console.log(secElement);
let headerElement = document.getElementsByTagName('header');
console.log(headerElement);
let divElement = document.getElementsByClassName('main-container');
console.log(divElement);

// 2
console.log('---')

let queryFirst = document.querySelector('li:first-child');
console.log(queryFirst);
let queryLast = document.querySelector('li:last-child');
console.log(queryLast);
let queryThird = document.querySelector('li:nth-child(3)');
console.log(queryThird);

// 3
console.log('---')


let queryAlls = document.querySelectorAll('li');
console.log(queryAlls);
let [...queryAll] = document.querySelectorAll('li');
console.log(queryAll);

// 4
console.log('---')

let listItems = document.querySelectorAll('ul.nav > li');
console.log(listItems);
let listItem = document.querySelectorAll('li:nth-child(2)');
console.log(listItem);
