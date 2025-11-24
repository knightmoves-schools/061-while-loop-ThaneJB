function markAsDone(todos) {
    while(i < todos.length){
      todos[i] = 'done - ' + todos[i];
    }
    return todos;
}
