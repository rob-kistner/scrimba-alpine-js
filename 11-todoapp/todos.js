function todos() {
  return {
    todos: [{
      id: 1,
      title: 'Finish Alpine Screencast',
      isComplete: false
    }],
    todoTitle: '',
    todoId: 2,
    addTodo() {
      if (this.todoTitle.trim() === '') return;
      this.todos.push({
        id: this.todoId,
        title: this.todoTitle,
        isComplete: false
      })
      this.todoId++;
      this.todoTitle = '';
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => {
        return id !== todo.id;
      });
    }
  }
}