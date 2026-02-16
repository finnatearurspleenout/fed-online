window.onload = function() {
    // 1
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            console.group('Список користувачів');
            users.forEach(user => {
                console.log(`name:${user.name}, username:${user.username}, email:${user.email}`);
            });
            console.groupEnd();
        })
    .catch(error => console.error('Помилка списку', error));
    // 2
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(posts => {
            console.group('Перший користувач');
            console.log(`name:${posts.name}, username:${posts.username}, email:${posts.email}`);
            console.groupEnd();
        })
    // 3
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(posts => {
            console.group('Пости першого користувача');
            posts.forEach(post => {
                console.log(`Заголовок ${post.title}`);
            });
            console.groupEnd();
        })
    // 4

    let btn = document.getElementById('loadBtn');
    let output = document.getElementById('output');
    let name = document.querySelector('h2');
    let details = document.querySelector('.details');

    btn.addEventListener('click', function() {
        fetch('https://swapi.dev/api/starships/10/')
            .then(response => response.json())
            .then(ship => {
                output.style.display = 'block';
                details.innerHTML = '';
                name.textContent = ship.name;
                for (let key in ship) {
                    let value = ship[key];
                    let itemContainer = document.createElement('div');
                    let label = document.createElement('strong');
                    label.textContent = key + ': ';
                    itemContainer.appendChild(label);
                    let makeLink = (url) => {
                        let link = document.createElement('a');
                        link.href = url;
                        link.textContent = 'Детальніше';
                        link.target = '_blank';
                        link.style.display = "block";
                        return link;
                    };
                    if (Array.isArray(value)) {
                        value.forEach(val => {
                            if(typeof val === 'string' && val.startsWith('http')) {
                                itemContainer.appendChild(makeLink(val));
                            }
                            else {
                                itemContainer.append(val + "");
                            }
                        });
                    }
                    else if (typeof value === 'string' && value.startsWith('http')) {
                        itemContainer.appendChild(makeLink(value));
                    }
                    else {
                        itemContainer.append(value);
                    }
                    details.appendChild(itemContainer);
                }
            })
        .catch(error => {
            console.error('Помилка завантаження даних', error);  
        });
    });
}