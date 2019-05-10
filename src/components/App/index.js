import React from 'react';
import ToDoList from "../ToDoList/index";
import ToDoForm from "../ToDoForm/index";

class App extends React.Component {
  
  state = {
    todos: [
      { id: 1, todo: "Build a web app" },
      { id: 2, todo: "Watch a movie" }
    ]
  };

  handleAddNewToDo = todo => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), todo }
      ]
    });
  }

  handleDeleteToDo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="toDoApp container">
        <h1 className="center blue-text">ToDo's</h1>
        <ToDoList todos={this.state.todos} handleDeleteToDo={this.handleDeleteToDo} />
        <ToDoForm handleAddNewToDo={this.handleAddNewToDo} />
      </div>
    );
  }
}

export default App;
