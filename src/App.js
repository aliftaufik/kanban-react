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

  handleMoveTask(id, status) {
    const tasks = this.state.tasks.slice();
    const index = tasks.findIndex(task => id === task.id);
    tasks[index].status = status;

    this.setState({ tasks });
  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="container mx-auto px-12 mt-24">
          <AddTask onClick={title => this.handleAddTask(title)}></AddTask>
          <Kanban
            tasks={this.state.tasks}
            onMoveTask={(id, status) => this.handleMoveTask(id, status)}
          ></Kanban>
        </div>
      </>
    );
  }
}
