import React from "react";
import { connect } from "react-redux";

class ToDoForm extends React.Component {

  state = {
    todo: ""
  };

  handleChange = event => {
    this.setState({ todo: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addToDo(this.state.todo);
    this.setState({ todo: "" });
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

const mapDispatchToProps = dispatch => {
  return {
    addToDo: todo => dispatch({ type: "ADD_TODO", todo })
  };
};

export default connect(null, mapDispatchToProps)(ToDoForm);