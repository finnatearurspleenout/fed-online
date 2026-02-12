// 1

let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!"
let pattern = textStr.match(/[A-Z]/g);
console.log(pattern);

// 2

let operation = "5 плюс 7 = 3";
let numbers = operation.match(/\d{1,6}/g);
console.log(numbers);

// 3

let regPattern = /\b\w{5}\b/g;
let textPattern = textStr.match(regPattern);
console.log(textPattern);