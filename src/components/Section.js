import React, { Component } from "react";
import Task from "./Task";

export default class Section extends Component {
  render() {
    const title = this.props.title;
    const txtColor =
      title === "TODO"
        ? "text-indigo-400"
        : title === "DOING"
        ? "text-indigo-500"
        : title === "DONE"
        ? "text-indigo-400"
        : "text-gray-500";
    return (
      <>
        <h3 className={txtColor + " text-center font-bold text-xl"}>{title}</h3>
        {this.props.tasks.map(task => {
          return (
            <Task
              task={task}
              key={task.id}
              onTaskForward={() => this.props.onTaskForward(task.id)}
              onTaskBackward={() => this.props.onTaskBackward(task.id)}
            ></Task>
          );
        })}
      </>
    );
  }
}
