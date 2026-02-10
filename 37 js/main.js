window.onload = function() {
    // 1

    function consoleText(text, delay) {
        setTimeout(function() {
            console.log(text);
        }, delay);
    }
    consoleText('Hello', 2000);

    // 2
    let timerBtn = document.querySelector('button');
    let display = document.querySelector('p');
    let counter = 0;
    timerBtn.onclick = function() {
        interval = setInterval(function() {
            counter++;
            display.innerHTML = counter;
            if(counter>=10) {
                clearInterval(interval);
            }   
        }, 1000);
    }

    // 3

    let changeBg = document.querySelector('.changeBtn');
    changeBg.onclick = function() {
        let root = document.documentElement;
        let bgColor = getComputedStyle(root).getPropertyValue('--bg-color');
        if(bgColor === 'black') {
            root.style.setProperty('--bg-color', 'blue');
        }
        else if(bgColor === 'blue') {
            root.style.setProperty('--bg-color','darkblue');
        }
        else { 
            root.style.setProperty('--bg-color','black');
        }
    }

    // або

    let randomBg = document.querySelector('.randomBg');
    randomBg.onclick = function() {
        let rootBg = document.documentElement;
        let colors = ['black', 'blue', 'darkblue', 'purple', 'darkgreen', 'darkred'];
        let randomIndex = Math.floor(Math.random()*colors.length);
        let newBg = colors[randomIndex];
        rootBg.style.setProperty('--bg-color', newBg);
    }
}