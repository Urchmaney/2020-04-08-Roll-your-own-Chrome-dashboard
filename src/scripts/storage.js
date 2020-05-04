const getTodos = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
}

const addTodo = (todo) => {
  if(todo.length > 0){
    let todos = getTodos();
    todos.push(todo);
    localStorage.setItem('todo',JSON.stringify(todos));
  }    
}

const updateTodo = (index, todo) => {
  let todos = getTodos();
  todos[index] = todo;
  localStorage.setItem('todo',JSON.stringify(todos));
}

const deleteTodo = (index) => {
  let todos = getTodos();
  todos.splice(index, 1);
  localStorage.setItem('todo',JSON.stringify(todos));
}

export {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
};