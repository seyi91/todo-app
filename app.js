const taskForm = document.querySelector('form');
const taskInput = document.querySelector('#task')
const deadline = document.querySelector('#deadline');
const results = document.querySelector('#results');

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = document.createElement('li');
    const completedBtn = document.createElement('input');
    completedBtn.type = 'checkbox';
    newTask.innerText = `${taskInput.value} – Due By: ${deadline.value}`;
    newTask.appendChild(completedBtn);
    taskInput.value = '';
    results.append(newTask);
})
