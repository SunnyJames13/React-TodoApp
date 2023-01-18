let id = 0;
export const addTodo = (task) => ({
  type: "ADD",
  id: id++,
  text: task
});

export const completeTodo = (id) => ({
  type: "DONE",
  id: id
});
