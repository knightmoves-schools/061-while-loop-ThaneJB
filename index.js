

function markAsDone(todos) {
    while(0 < todos.length){
      todos[0] = 'done - ' + todos[0];
    }
    return todos;
}
