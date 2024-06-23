const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const todoText = input.value.trim();

    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.innerText = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            todoItem.remove();
        });

        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);

        // Clear the input field
        input.value = '';
    }
});
todoList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});