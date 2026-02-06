window.onload = function() {
    // 1
   let radioButtons = document.querySelectorAll('input[name="color"]');
   radioButtons.forEach(function(el) {
        el.onchange = function() {
            document.body.style.backgroundColor = el.value;
        }
   });
 
    // 2

   let resultBtn = document.querySelector('.result');
   let resultContainer = document.querySelector('.resultContainer');
   let [...checkboxes] = document.querySelectorAll('input[name="hobby"]');
   let checkValue = [];
   resultBtn.onclick = function() {
        resultContainer.innerHTML = "";
        checkValue = [];
        checkboxes.forEach(item => {
            if(item.checked) {
                checkValue.push(item.value);
            }
        });
        checkValue.forEach(item => {
            let p = document.createElement('p');
            p.innerText = item;
            resultContainer.appendChild(p);
        });
   }

    // 3

   let select = document.querySelector('#countrySelect');
   let infoBox = document.querySelector('#info');
   let countryData = {
        ua: 
            {capital: 'Київ', population: '40mln'},
        pl: 
            {capital: 'Варшава', population: '35mln'},
        us: 
            {capital: 'Вашингтон', population: '331mln'}
    };
    select.onchange = function() {
        let selectValue = select.value;
        if(selectValue!== "") {
            let country = countryData[selectValue];
            infoBox.innerHTML = `Столиця ${country.capital} <br> Населення ${country.population}`;
        }
        else {
            infoBox.innerHTML = 'Виберіть країну';
        }
    };

    // 4

    let radios = document.querySelectorAll('input[name="rating"]');
    let feedback = document.querySelector('#feedback');
    radios.forEach(function(item) {
        item.onchange = function() {
            let val = item.value;
            if(val <=2) {
                feedback.innerText = 'Дякуємо за вашу оцінку ' + val;
                feedback.style.color = 'red';
            }
            else if(val == 3 || val == 4) {
                feedback.innerText = 'Дуже дякуємо '+ val;
                feedback.style.color = 'orange';
            }
            else {
                feedback.innerText = 'Дякуємо за найвищий бал ' + val;
                feedback.style.color = 'green';
            }
        }
    });

    // Додаткове завдання

    let form = document.querySelector('#pizzaForm');
    let totalPriceElement = document.querySelector('#totalPrice');
    function calculate() {
        let price = Number(document.querySelector('#pizzaType').value);
        let selectedSize = document.querySelector('input[name="size"]:checked');
        price += Number(selectedSize.value);
        let toppings = document.querySelectorAll('.topping');
        toppings.forEach(function(item) {
            if (item.checked) {
                price += Number(item.value);
            }
        });
        totalPriceElement.innerText = "Ціна " +price+ " грн";
    }
    form.onchange = calculate;
}
