import addTodos from './todo.js';


const container = document.getElementById('container');

const time = () => {
    const t = document.createElement('div');
    t.id = 'time';
    t.innerHTML = new Date().toLocaleTimeString();
    container.appendChild(t);
}

window.addEventListener('load', (e) => {
    time();
    addTodos();
})