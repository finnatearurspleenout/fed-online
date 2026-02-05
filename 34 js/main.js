
window.onload = function () {
    // 1

    let amountInput = document.querySelector('.main-input');
    let secondInput = document.querySelector('.second-input');
    let btn = document.querySelector('.converter-btn');
    let resultDiv = document.querySelector('.result');
    btn.addEventListener('click', function() {
        let amount = Number(amountInput.value);
        let secondInp = Number(secondInput.value);
        if (amount>0 && secondInp>0) {
            let finalResult = amount / secondInp;
            resultDiv.innerText = 'Результат:' +finalResult+'$';
        }
        else {
            resultDiv.innerText = 'Введіть корректне значення';
            resultDiv.style.color = 'red';
        }
    });

    // 2

    let input = document.querySelector('.task-input');
    let button = document.querySelector('.add-btn');
    let list = document.querySelector('.task-list');
    button.addEventListener('click', function() {
        let text = input.value;
        if(text === '') {
            alert('Введіть значення');
            return;
        }
        let liEl = document.createElement('li');
        liEl.innerText = text;
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'видалити';
        liEl.appendChild(deleteBtn);
        list.appendChild(liEl);
        input.value = '';
        deleteBtn.addEventListener('click', function() {
            liEl.remove();
        })
    });

}
