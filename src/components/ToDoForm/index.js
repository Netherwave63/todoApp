import React from "react";
import PropTypes from "prop-types";

class ToDoForm extends React.Component {

  state = {
    todo: ""
  };

  handleChange = event => {
    this.setState({ todo: event.target.value });
  }

  handleSubmit = event => {
    this.props.handleAddNewToDo(this.state.todo);
    this.setState({ todo: "" });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add new todo:</label>
        <input 
          type="text"
          value={this.state.todo}
          onChange={this.handleChange}
        />
      </form>
    );
  }

}

ToDoForm.propTypes = {
  handleAddNewToDo: PropTypes.func
};

export default ToDoForm;