import React, { Component } from "react";
import Section from "./Section";

export default class Kanban extends Component {
  render() {
    return (
      <div className="flex flex-col md:flex-row justify-between mt-8">
        <div className="md:w-1/3 md:pr-3">
          <Section
            title="TODO"
            tasks={this.props.tasks.filter(task => task.status === "todo")}
            onTaskForward={id => this.props.onMoveTask(id, "doing")}
            onTaskBackward={id => this.props.onMoveTask(id, "todo")}
            onTaskRemove={this.props.onRemoveTask}
          ></Section>
        </div>
        <div className="md:w-1/3 md:px-3 mt-6 md:mt-0">
          <Section
            title="DOING"
            tasks={this.props.tasks.filter(task => task.status === "doing")}
            onTaskForward={id => this.props.onMoveTask(id, "done")}
            onTaskBackward={id => this.props.onMoveTask(id, "todo")}
            onTaskRemove={this.props.onRemoveTask}
          ></Section>
        </div>
        <div className="md:w-1/3 md:pl-3 mt-6 md:mt-0">
          <Section
            title="DONE"
            tasks={this.props.tasks.filter(task => task.status === "done")}
            onTaskForward={id => this.props.onMoveTask(id, "done")}
            onTaskBackward={id => this.props.onMoveTask(id, "doing")}
            onTaskRemove={this.props.onRemoveTask}
          ></Section>
        </div>
      </div>
    );
  }
}
