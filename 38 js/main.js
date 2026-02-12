window.onload = function() {
    // 1
    
    let input = document.querySelector('#userInput');
    let saveBtn = document.querySelector('#saveBtn');
    let showBtn = document.querySelector('#showBtn');
    let output = document.querySelector('#output');

    saveBtn.onclick = function() {
        let value = input.value;
        if (value.trim() !== "") {
            sessionStorage.setItem('userInput', value);
            input.value = "";
        }
        else {
            alert('Поле порожнє');
        }
        
    }

    showBtn.onclick = function() {
        let saveData = sessionStorage.getItem('userInput');
        if (saveData) {
            output.innerText = 'Збережені дані:' + saveData;
        }
        else {
            output.innerText = 'Немає збережених даних';
        }
    }

    // 2

    let themeSelect = document.getElementById('themeSelect');
    let savedBtn = document.getElementById('saveThemeBtn');
    let saveColor = localStorage.getItem('userBgColor');
    if(saveColor) {
        document.body.style.backgroundColor = saveColor;
        themeSelect.value = saveColor;
    }

    savedBtn.onclick = function() {
        let selectedColor = themeSelect.value;
        localStorage.setItem('userBgColor', selectedColor);
        document.body.style.backgroundColor = selectedColor;
    }

    // 3

    let todoInput = document.getElementById('todoInput');
    let addBtn = document.getElementById('addBtn');
    let list = document.getElementById('todoList');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        list.innerHTML = '';
        tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerText = task + "";
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Видалити';
        deleteBtn.onclick = function() {
            removeTask(index);
        }
        li.appendChild(deleteBtn);
        list.appendChild(li);
        });
    }

    addBtn.onclick = function() {
        if(todoInput.value.trim() !== "") {
            tasks.push(todoInput.value);
            saveAndRender();
            todoInput.value = "";
        }
    }
    function removeTask(index) {
        tasks.splice(index, 1);
        saveAndRender();
    }

    function saveAndRender() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
    renderTasks();
    
    // 4

    let myProject = {
        name: "Мій проект",
        difficulty: 5,
        description: "Опис проекту",
        version: "1.0.0",
        lastUpdated: null,
        isCompleted: false
    };

    let jsonString = JSON.stringify(myProject);
    console.log(jsonString);
    let parsedObject = JSON.parse(jsonString);
    console.log(parsedObject);
}