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
          id: uuidv4(),
          status: "todo",
          title: "This is just a sample task"
        },
        {
          id: uuidv4(),
          status: "doing",
          title: "Feel free to pass it around"
        },
        {
          id: uuidv4(),
          status: "done",
          title: "Or just remove it entirely"
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

  handleRemoveTask(id) {
    const tasks = this.state.tasks.slice();
    tasks.splice(
      tasks.findIndex(task => task.id === id),
      1
    );

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
            onRemoveTask={id => this.handleRemoveTask(id)}
          ></Kanban>
        </div>
      </>
    );
  }
}
