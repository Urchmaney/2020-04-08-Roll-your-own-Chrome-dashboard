const getStorageTodo = () => {
    return (localStorage.getItem('todo'));
}

const addStorageTodo = (todo) => {
    let todos = localStorage.getItem('todo');
    if(!todos) todos = '';
    todos += todos.length > 0 ? `,${todo}` : todo;
    localStorage.setItem('todo',todos);
}

const addTodos = () => {
    const container = document.getElementById('container');
    const formContainer = document.createElement('div');
    formContainer.id = 'todo-container';
    const addDisplayTodo = (todo) => {
        const row = document.createElement('p');
        row.classList.add('todo');
        row.innerHTML = todo;
        formContainer.appendChild(row);
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
        addStorageTodo(inputVal);
        addDisplayTodo(inputVal); 
    })
    formContainer.appendChild(form);
    if(getStorageTodo()){
        getStorageTodo().split(',').forEach(ele => {
            addDisplayTodo(ele);
        });
    }
        
    container.appendChild(formContainer);
}

export default addTodos;
