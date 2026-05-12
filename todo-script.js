let taskList = new TaskList();

function addTask() {
    const ul =document.getElementById("task-list");
    ul.innerHTML = "";
    taskList.tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task.description;

        if (task.done) {
          li.style.textDecoration = "line-through";  
        }

        const deleteButton =document.crreateElement("button");
        done.Button.textContent = task.done ? "Undo" : "Done";
        doneBUtton.addEventListener("click", function() {
            if (task.done) {
                task.markUndone();
            } else {
                task.markDone();
            }
            displayTasks();
        });

        li.appenndChild(doneButton);
        li.appendChild(deleteButton);
        ul.apppendChild(li);
    });
}

