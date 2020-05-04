import {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
} from './storage.js';


const container = document.getElementById('container');

const displayTime = () => {
    const t = document.createElement('div');
    t.id = 'time';
    t.innerHTML = new Date().toLocaleTimeString();
    container.appendChild(t);
}

const displayTodos = () => {
    const formContainer = document.createElement('div');
    formContainer.id = 'todo-container';
    const addDisplayTodo = (todo, index) => {
        if(todo.length > 0){
            const row = document.createElement('p');
            const btn = document.createElement('button');
            btn.classList.add('btn-close');
            row.classList.add('todo');
            row.id = `${index}`;
            row.innerHTML = todo;
            btn.innerHTML = 'X';
            btn.addEventListener('click', (e) => {
                deleteTodo(index);
                showPage();                 
            });
            row.appendChild(btn);
            formContainer.appendChild(row);
        }        
    }
    const form = document.createElement('form');
    const txtInput = document.createElement('input');
    txtInput.setAttribute("type", "text");
    txtInput.setAttribute("placeholder", "Todos");
    form.appendChild(txtInput);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputVal = txtInput.value;
        txtInput.value = '';
        addTodo(inputVal);
        showPage();
    })
    formContainer.appendChild(form);
    const todos = getTodos();
    for(let i = 0; i < todos.length; i++){
        addDisplayTodo(todos[i], i);
    }       
    container.appendChild(formContainer);
}

const showPage = () => {
    container.innerHTML = '';
    displayTime();
    displayTodos();
}

window.addEventListener('load', (e) => {
    showPage();
})