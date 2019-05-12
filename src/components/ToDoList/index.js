import React from "react";
import { connect } from "react-redux";

const ToDoList = ({ todos, deleteToDo }) => (

  <ul className="collection">
    {  
      todos.length === 0 ? ( 
        <p className="collection-item center">
          You have no todo' yet, add one?
        </p>
      ) : (
        todos.map(todo => (
          <li 
            className="collection-item" 
            key={ todo.id }
            onClick={() => deleteToDo(todo.id)}
          >
            { todo.todo }
          </li>
        ))
      )
    }
  </ul>

);

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteToDo: (id) => dispatch({ type: "DELETE_TODO", id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);