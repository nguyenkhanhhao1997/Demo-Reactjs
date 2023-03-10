import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    name: "",
  };
  handleOnchangeTitle = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.name) {
      toast.error("Chua nhap ban oi");
    } else {
      let todo = {
        id: Math.floor(Math.random() * 10000),
        name: this.state.name,
      };
      this.props.addNewTodo(todo);
      this.setState({
        name: "",
      });
    }
  };

  render() {
    let { title } = this.state;

    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnchangeTitle(event)}
        />
        <button type="button" onClick={() => this.handleAddTodo()}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
