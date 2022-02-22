const taskForm = document.querySelector('form');
const taskInput = document.querySelector('#task')
const deadline = document.querySelector('#deadline');
const results = document.querySelector('#results');

results.addEventListener('click', (e) => {
    const lowercaseTagName = e.target.tagName.toLowerCase();
    if (lowercaseTagName === "input") {
        // e.target.parentElement.style.textDecoration = "line-through";
        (e.target.checked) ?  e.target.parentElement.style.textDecoration = "line-through" : e.target.parentElement.style.textDecoration = "";
    }
})

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


