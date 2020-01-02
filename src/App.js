import React from "react";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div class="container mx-auto px-12 mt-20">
        <AddTask></AddTask>
      </div>
    </>
  );
}

export default App;
