import React, { Component } from "react";
import Task from "./Task";

export default class Section extends Component {
  render() {
    const status = this.props.tasks[0].status;
    const txtColor =
      status === "todo"
        ? "text-indigo-400"
        : status === "doing"
        ? "text-indigo-500"
        : status === "done"
        ? "text-indigo-400"
        : "text-gray-500";
    return (
      <>
        <h3 className={txtColor + " text-center font-bold text-xl"}>
          {this.props.title}
        </h3>
        {this.props.tasks.map(task => {
          return <Task task={task} key={task.id}></Task>;
        })}
      </>
    );
  }
}
