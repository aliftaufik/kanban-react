import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Kanban from "./components/Kanban";
import uuidv4 from "uuid/v4";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          status: "todo",
          title: "abcde"
        },
        {
          id: 2,
          status: "doing",
          title: "bcdef"
        },
        {
          id: 3,
          status: "done",
          title: "cdefg"
        }
      ]
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
          <Kanban tasks={this.state.tasks}></Kanban>
        </div>
      </>
    );
  }
}
