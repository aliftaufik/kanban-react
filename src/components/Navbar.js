import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div class="fixed top-0 inset-x-0 bg-indigo-800 text-center p-3 shadow-lg">
          <h3 className="text-2xl font-bold text-indigo-100">Kanban React</h3>
        </div>
      </>
    );
  }
}
