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
    if (this.state.value) this.props.onClick(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="flex flex-col xs:flex-row justify-center xs:justify-start xs:items-center">
        <input
          value={this.state.value}
          onChange={e => this.handleChange(e)}
          onKeyUp={e => this.handleOnKeyUp(e)}
          placeholder="New task"
          className="border-2 focus:shadow-inner outline-none border-indigo-300 hover:border-indigo-400 focus:border-indigo-400 rounded px-3 py-1"
        ></input>
        <div className="text-center">
          <button
            className="mt-4 xs:mt-0 xs:ml-6 px-3 py-1 focus:shadow-md hover:shadow-md focus:outline-none rounded bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-500 text-white"
            onClick={() => this.handleOnClick()}
          >
            Add Task
          </button>
        </div>
      </div>
    );
  }
}
