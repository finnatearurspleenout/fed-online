window.onload = function(){
    // 1
    let firstButton = document.querySelector('.first-btn');
    function getRandomColor(){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    firstButton.onclick = function(){
        let randomColor = getRandomColor();
        firstButton.style.color = randomColor;
    }
    // 2
    let secondButton = document.querySelector('.second-btn');
    secondButton.ondblclick = function(){
        let currentWidth = secondButton.offsetWidth;
        let currentHeight = secondButton.offsetHeight;
        secondButton.style.width = (currentWidth*2)+'px';
        secondButton.style.height = (currentHeight*2)+'px';
    }
    // 3
    let thirdButton = document.querySelector('.third-btn');
    let btnText = document.querySelector('.btn-text');
    let count = 0;
    function incrementCounter() {
        count++;
        btnText.textContent = count;
        if(count>=10) {
            thirdButton.removeEventListener('click', incrementCounter);
        }
    }
    thirdButton.addEventListener('click', incrementCounter);
    // 4
    let div = document.querySelectorAll('.box');
    div.forEach(function(divs) {
        divs.onclick = function(){
            this.remove();
        }
    });
    // 5
    let buttonContainer = document.querySelector('.block-Container');
    buttonContainer.addEventListener('click', function(event){
        let btnName = event.target.className;
        alert(`Ви нажали на ${btnName}`);
    });
}