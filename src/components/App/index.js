import React from 'react';
import ToDoList from "../ToDoList/index";
import ToDoForm from "../ToDoForm/index";

class App extends React.Component {

  render() {
    return (
      <div className="toDoApp container">
        <h1 className="center blue-text">ToDo's</h1>
        <ToDoList />
        <ToDoForm />
      </div>
    );
  }
  
}

export default App;
