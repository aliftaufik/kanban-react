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

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.handleChange(e)}
          placeholder="New task"
          className="border-2 focus:shadow-md border-indigo-300 hover:border-indigo-400 focus:border-indigo-400 rounded px-3 py-1"
        ></input>
        <button
          className="ml-6 px-2 py-1 rounded bg-indigo-600 text-white"
          onClick={() => this.props.onClick(this.state.value)}
        >
          Add Task
        </button>
      </div>
    );
  }
}
