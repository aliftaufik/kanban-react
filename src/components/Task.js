import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

export default class Task extends Component {
  render() {
    const status = this.props.task.status;
    const bgColor =
      status === "todo"
        ? "bg-indigo-300"
        : status === "doing"
        ? "bg-indigo-400"
        : status === "done"
        ? "bg-indigo-300"
        : "bg-gray-500";
    return (
      <div
        className={
          bgColor +
          " text-indigo-800 hover:shadow-md rounded px-4 py-2 mt-4 break-words"
        }
      >
        <h3 className="text-center text-xl">{this.props.task.title}</h3>
        <div className="flex justify-between mt-6">
          <button onClick={this.props.onTaskRemove}>
            <FontAwesomeIcon
              icon={faTrash}
              className="hover:text-red-600 text-md xs:text-lg"
            />
          </button>
          <div className="w-16 sm:w-20 flex justify-between text-xl xs:text-2xl">
            <button onClick={this.props.onTaskBackward}>
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="hover:text-white"
              />
            </button>
            <button onClick={this.props.onTaskForward}>
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="hover:text-white"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
