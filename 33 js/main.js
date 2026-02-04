window.onload = function() {
    // 1
    let mouseOvr = document.querySelector('.container');
    mouseOvr.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'blue';
    });
    mouseOvr.addEventListener('mouseout', function(){
        this.style.backgroundColor = 'gray';
    });

    
    // 2


    let rightClick = document.querySelector('.text-content');
    let menu = document.querySelector('.menu');
    let leftEl = document.querySelector('.menu-left');
    let rightEl = document.querySelector('.menu-right');
    let centerEl = document.querySelector('.menu-center');
    let hideEl = document.querySelector('.menu-hide');
    rightClick.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        menu.style.display = 'block';
        menu.style.left = e.pageX + 'px';
        menu.style.top = e.pageY + 'px';
    });
    leftEl.addEventListener('click', function() {
        rightClick.style.textAlign = 'left';
        menu.style.display = 'none';
    });
    rightEl.addEventListener('click', function() {
        rightClick.style.textAlign = 'right';
        menu.style.display = 'none';
    });
    centerEl.addEventListener('click', function() {
        rightClick.style.textAlign = 'center';
        menu.style.display = 'none';
    });
    hideEl.addEventListener('click', function() {
        rightClick.innerText = '';
        // rightClick.style.display = 'none';
        menu.style.display = 'none';
    });
    document.onclick = function() {
        menu.style.display = 'none';
    }


    // 3


    let imgEl = document.querySelector('.image-container img');
    imgEl.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.3)';
        this.style.transition = 'all 0.4s ease';
    });
    imgEl.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });


    // 4


    let game = document.querySelector('.game-container');
    let x = 0, y = 0, step = 10;
    let menuEl = document.querySelector('.game-menu');
    let menuItem = menuEl.querySelectorAll('li');
    let activeIndex = -1;
    let isMenuOpen = false;
    window.addEventListener('keydown', function(e){
        if(e.code === 'KeyM') {
            isMenuOpen = true;
            resetMenuHighlight();
            menuEl.style.display = 'block';
            activeIndex = 0;
            highlightItem(activeIndex);
            return;
        }
        if(e.code === 'KeyC') {
            isMenuOpen = false;
            menuEl.style.display = 'none';
            return;
        }
        if(isMenuOpen) {
            if(e.key === 'ArrowDown') {
                activeIndex = (activeIndex+1)%menuItem.length;
                highlightItem(activeIndex);
            }
            else if(e.key === 'ArrowUp') {
                activeIndex = (activeIndex-1 + menuItem.length)%menuItem.length;
                highlightItem(activeIndex);
            }
            return;
        }
        if(!isMenuOpen) {
            if (e.key === 'ArrowUp') y-=step;
            if (e.key === 'ArrowDown') y+=step;
            if (e.key === 'ArrowLeft') x-=step;
            if (e.key === 'ArrowRight') x+=step;
            game.style.top = y+'px';
            game.style.left = x+'px';
            game.style.backgroundColor = 'green';
        }
    });
    window.addEventListener('keyup', function(e){
        if(!isMenuOpen) {
            if(e.key.includes('Arrow')) {
                game.style.backgroundColor = 'red';
            }
        }
    });
    function highlightItem(index) {
        resetMenuHighlight();
        menuItem[index].style.backgroundColor = 'blue';
    }
    function resetMenuHighlight() {
        menuItem.forEach(item =>
            item.style.backgroundColor = 'transparent'
        );
    }


    // 5


    let obj = document.querySelector('.object');
    let secondGame = document.querySelector('.second-game');
    let isDragging = false;
    obj.addEventListener('mousedown', function() {
        isDragging = true;
    });
    secondGame.onmousemove = function(e) {
        if (isDragging == true) {
            let x = e.pageX - secondGame.offsetLeft;
            let y = e.pageY - secondGame.offsetTop;
            obj.style.left = (x-50)+'px';
            obj.style.top = (y-50)+'px';
        }
    };
    window.onmouseup = function() {
        isDragging = false;
    }; 
}