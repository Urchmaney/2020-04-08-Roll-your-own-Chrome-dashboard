const addTodos = () => {
    const container = document.getElementById('container');
    const formContainer = document.createElement('div');
    formContainer.id = 'todo-container';
    const addDisplayTodo = (todo) => {
        if(todo.length < 1) return;
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
