import React from "react";
import PropTypes from "prop-types";

const ToDoList = ({ todos, handleDeleteToDo }) => (

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
            onClick={() => handleDeleteToDo(todo.id)}
          >
            { todo.todo }
          </li>
        ))
      )
    }
  </ul>

);

ToDoList.propTypes = {
  todos: PropTypes.array
};

export default ToDoList;