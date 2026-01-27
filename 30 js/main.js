
window.onload = function() {

    // 1

    let ulEl = document.getElementById("tree");
    console.log(ulEl);
    let levelOne = ulEl.children.length;
    console.log(levelOne);

    let levelTwo = document.querySelectorAll("#tree > li > ul > li");
    console.log(levelTwo);
    console.log(levelTwo.length);
    levelTwo.forEach(item => {
        console.log(item.firstChild.textContent.trim());
    });

    // 2
    console.log("---");

    const table = document.querySelector('table');
    const booksArray = [
        {
            title: 'Пригоди Аліси в Країні Див',
            year: 1865,
            rating: 4.5
        },

        {
            title: '1984',
            year: 1949,
            rating: 4.8
        },

        {
            title: 'Гаррі Поттер і філософський камінь',
            year: 1997,
            rating: 4.7
        }
    ];
    const tbody = document.createElement('tbody');
    booksArray.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.year}</td>
            <td>${book.rating}</td>
            `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // 3
    console.log('---')

    let containerEl = document.querySelector('.js-content');
    const elementsArray = [
        { tag: 'p', text: 'Елемент 1' },
        { tag: 'div', text: 'Елемент 2' },
        { tag: 'span', text: 'Елемент 3' }
    ];
    elementsArray.forEach(item => {
        let newEl = document.createElement(item.tag);
        newEl.textContent = item.text;
        containerEl.appendChild(newEl);
    });

    let contentElement = document.querySelector('.second-js-content');
    const elementArray = [
        { tag: 'p', text: 'параграф' },
        { tag: 'div', text: 'блок' },
        { tag: 'span', text: 'рядок' }
    ];

    function createElement(obj) {
        let newElement = document.createElement(obj.tag);
        newElement.textContent = obj.text;
        return newElement; 
    }

    elementArray.forEach(item => {
        let createNode = createElement(item);
        contentElement.appendChild(createNode);
    });

// 4
    let container = document.querySelector('.container');
    const elementsArr = [
        { text: 'Елемент 1', usePrepend: true },
        { text: 'Елемент 2', usePrepend: false },
        { text: 'Елемент 3', usePrepend: true }
    ];

    elementsArr.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item.text;
        if(item.usePrepend) {
            container.before(p);
        }
        else {
            container.after(p);
        }
    });
}

