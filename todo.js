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

