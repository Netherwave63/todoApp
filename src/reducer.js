const initState = {
  todos: [
    { id: Math.random(), todo: "Build a web page" },
    { id: Math.random(), todo: "Watch a movie" }
  ]
};

const reducer = (state = initState, action) => {

  let newTodos = initState.todos;

  if(action.type === "DELETE_TODO") {
    newTodos = state.todos.filter(todo => todo.id !== action.id);
  } else if(action.type === "ADD_TODO") {
    newTodos = [
      ...state.todos,
      { id: Math.random(), todo: action.todo }
    ];
  };

  return {
    ...state,
    todos: newTodos
  };

};

export default reducer;