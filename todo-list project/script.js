const form = document.getElementById('form');
const input = document.getElementById('input');
const error = document.getElementById('span');
const todos = document.querySelector('ul');

const todosStorage = JSON.parse(localStorage.getItem('todos'));

if(todosStorage){
    todosStorage.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    addTodo();
});


function addTodo(todo) {
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }

    if(todoText === ""){
        error.classList.remove('hidden');
        return;
    }

    if(todoText){
        const todoEl = document.createElement('li');
        if(todo && todo.completed){
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText;

         // completing todo
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLocalStorage();
        });

        // deleting todo
        todoEl.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            todoEl.remove();
            updateLocalStorage();
        });

        input.value = "";

        todos.appendChild(todoEl);

        updateLocalStorage();
    }
};

function updateLocalStorage() {
    const todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos));
};