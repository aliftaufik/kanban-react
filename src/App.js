import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import uuidv4 from "uuid/v4";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  handleAddTask(title) {
    this.setState({
      tasks: this.state.tasks.concat({ id: uuidv4(), title, status: "todo" })
    });
  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="container mx-auto px-12 mt-20">
          <AddTask onClick={e => this.handleAddTask(e)}></AddTask>
        </div>
      </>
    );
  }
}
