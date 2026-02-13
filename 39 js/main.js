window.onload = function() {
    // 1
    let inputNumber = 20;
    Promise.resolve(inputNumber)
    .then(value => {
        console.log(`Початкове число ${value}`);
        let result = value +5;
        console.log(`Після додавання ${result}`);
        return result;
    })
    .then(value => {
        let result = value * 2;
        console.log(`Після множення ${result}`);
        return result;
    })
    .then(value => {
        let result = value - 10;
        console.log(`Після віднімання ${result}`);
        return result;
    })
    .catch(error => {
        console.error(`Помилка ${error}`);
    });

    // 2

    function convertToUpperCase(text) {
        return new Promise((resolve, reject) => {
            if (typeof text !== 'string') {
                reject('Вхідні дані не є рядком');
            }

            setTimeout(() => {
                let result = text.toUpperCase();
                resolve(result);
            }, 2000);
        });
    }

    convertToUpperCase('hello world')
    .then((transformedText) => {
        console.log(`${transformedText}`);
    })
    .catch((error) => {
        console.error(`Помилка ${error}`);
    });

    // 3

    function compareNumbers(a, b) {
        return new Promise((resolve, reject) => {
            if (a===b) {
                resolve('Числа рівні');
            }
            else if (a > b) {
                resolve(`Число ${a} більше за ${b}`);
            }
            else {
                resolve(`Число ${b} більше за ${a}`);
            }
        });
    }

    compareNumbers(10, 20)
    .then(message => console.log('Успіхх', message))
    .catch(error => console.error('Помилка', error));
    // 
    compareNumbers(10, 10)
    .then(message => console.log('Успіхх', message))
    .catch(error => console.error('Помилка', error));

}
        