window.onload = function() {
    let headerEl = document.createElement('header');
    headerEl.style.padding = '50px';
    headerEl.style.backgroundColor = 'yellow';
    headerEl.style.textAlign = 'center';

    document.body.prepend(headerEl);

    // 3

    const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    ];

    menuData.forEach(item => {
        const linkEl = document.createElement('a');
        linkEl.textContent = item.name;
        linkEl.href = item.url;
        // 4
        linkEl.setAttribute('target', '_blank');

        headerEl.appendChild(linkEl);
    });

    // 5

    let container = document.createElement('div');
    container.style.cssText = ' display:flex';
    container.classList.add('main-container');
    document.body.prepend(container);

    for(let i=0; i<50; i++) {
        let containerS = document.createElement('div');
        containerS.style.cssText = 'border-radius:40px; width:50px; height:50px; background-color:black';
        container.appendChild(containerS);
        // 6
        containerS.classList.add('circle-elemt');
    }

    // Додаткове завдання

    let secondDiv = document.createElement('div');
    secondDiv.style.cssText = ' display:flex';
    secondDiv.classList.add('second-div');
    document.body.prepend(secondDiv);

    for(let i=0; i<50; i++) {
        let div = document.createElement('div');
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        let randomBg = `rgb(${r}, ${g}, ${b})`;
        div.style.cssText = 'border-radius:40px; width:50px; height:50px;';
        div.style.backgroundColor = randomBg;
        secondDiv.appendChild(div)
        div.classList.add('circle-elemt');
    }
}



