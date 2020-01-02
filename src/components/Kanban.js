import React, { Component } from "react";
import Section from "./Section";

export default class Kanban extends Component {
  render() {
    return (
      <div className="flex justify-between mt-8">
        <div className="w-1/3 pr-3">
          <Section
            title="TODO"
            tasks={this.props.tasks.filter(task => task.status === "todo")}
          ></Section>
        </div>
        <div className="w-1/3 px-3">
          <Section
            title="DOING"
            tasks={this.props.tasks.filter(task => task.status === "doing")}
          ></Section>
        </div>
        <div className="w-1/3 pl-3">
          <Section
            title="DONE"
            tasks={this.props.tasks.filter(task => task.status === "done")}
          ></Section>
        </div>
      </div>
    );
  }
}
