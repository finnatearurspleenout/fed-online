// 1

let firstSpread = [1, 2, 3];
let secondSpread = [...firstSpread, 4, 5, 6];
console.log(secondSpread);

// 2
console.log('---');

function firstRest (firstArg, ...args) {
    console.log(firstArg);
    console.log(args);
}

firstRest(1, 2, 3, 4, 5);

function someNumber (...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

console.log(someNumber(1, 2, 3, 4, 5));

// 3 
console.log('---');

function anything (...anything) {
    for (let item of anything) {
        console.log(`${item} - ${typeof item}`);
    }
}

anything(1, 'hello', true, null);
console.log('---');

function allTypes () {
    let allValue = [1, 'text', true, null];
    for (let value of allValue) {
        if (typeof value === 'number') {
            console.log(`${value} - це число`);
        }
        else if (typeof value === 'string') {
            console.log(`${value} - це стрінг`);
        }
        else if (typeof value === 'boolean') {
            console.log(`${value} - це булеве значення`);
        }
        else {
            console.log(`${value} - це інший тип`);
        }
    }
}

allTypes();
