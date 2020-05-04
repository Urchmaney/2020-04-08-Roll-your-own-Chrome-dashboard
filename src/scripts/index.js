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
    const addDisplayTodo = (todo) => {
        if(todo.length > 0){
            const row = document.createElement('p');
            row.classList.add('todo');
            row.innerHTML = todo;
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
        addDisplayTodo(inputVal); 
    })
    formContainer.appendChild(form);
    console.log(getTodos());
    getTodos().forEach(ele => {
        addDisplayTodo(ele);
    });        
    container.appendChild(formContainer);
}

window.addEventListener('load', (e) => {
    localStorage.clear();
    displayTime();
    displayTodos();
})