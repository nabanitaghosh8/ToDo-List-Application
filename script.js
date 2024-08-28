document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(text) {
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
    `;

    document.getElementById('todo-list').appendChild(li);

    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });
}
