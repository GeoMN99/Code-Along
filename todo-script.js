let taskList = new TaskList();

function displayTasks() {
    const ul =document.getElementById("task-list");
    ul.innerHTML = "";
    taskList.tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task.description;

        if (task.done) {
          li.style.textDecoration = "line-through";  
        }

        const doneButton = document.createElement("button");
        doneButton.textContent = task.done ? "Undo" : "Done";
        doneButton.addEventListener("click", function() {
            if (task.done) {
                task.markUndone();
            } else {
                task.markDone();
            }
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.deleteTask(task.id);
            displayTasks();
        });

        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        ul.appendChild(li);
    });
}

document.getElementById("new-task").addEventListener("submit", function(e) {
    e.preventDefault();
    const description = document.getElementById("task-description").value;
    if (description) {
        const task = new Task(description);
        taskList.addTask(task);
        displayTasks();
        document.getElementById("new-task").reset();
    }
});