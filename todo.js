function Task(description) {
    this.description = description;
    this.done = false;
    this.id = null;
}

Task.prototype.markDone = function() {
    this.done = true;
};

Task.prototype.markUndone = function() {
    this.done = false;
};

function TaskList() {
    this.tasks = [];
    this.currentId = 1;
}

TaskList.prototype.addTask = function(task) {
    task.id = this.currentId;
    this.currentId++;
    this.tasks.push(task);
}

TaskList.prototype.findTask = function(id) {
    for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
            return this.tasks[i];
        }
    }
    return false;
};