import React, { Component } from "react";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleOnKeyUp(e) {
    if (e.which === 13) this.handleOnClick();
  }

  handleOnClick() {
    this.props.onClick(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.handleChange(e)}
          onKeyUp={e => this.handleOnKeyUp(e)}
          placeholder="New task"
          className="border-2 focus:shadow-md border-indigo-300 hover:border-indigo-400 focus:border-indigo-400 rounded px-3 py-1"
        ></input>
        <button
          className="ml-6 px-2 py-1 rounded bg-indigo-600 text-white"
          onClick={() => this.handleOnClick()}
        >
          Add Task
        </button>
      </div>
    );
  }
}
