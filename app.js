const taskForm = document.querySelector('form');
const taskInput = document.querySelector('#task')
const deadline = document.querySelector('#deadline');
const results = document.querySelector('#results');

results.addEventListener('click', (e) => {
    const lowercaseTagName = e.target.tagName.toLowerCase();
    if (lowercaseTagName === "input") {
        (e.target.checked) ?  e.target.parentElement.style.textDecoration = "line-through" : e.target.parentElement.style.textDecoration = "";
    }
    if (lowercaseTagName === 'button') {
        e.target.parentNode.remove();
    }
})

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //create new list item that will contain the new task
    const newTask = document.createElement('li');
    newTask.innerText = `${taskInput.value} – Due By: ${deadline.value}`;
   
    //create "Completed" checkbox button
    const completedBtn = document.createElement('input');
    completedBtn.type = 'checkbox';

    //create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';

    //Append checkbox and remove btn to the newly created list item
    newTask.appendChild(completedBtn);
    newTask.appendChild(removeBtn);
    
    //Clear the form input after submitting
    taskInput.value = '';
    
    //Add the newly created task list item to the unordered list
    results.append(newTask);
})


