import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <TodoInput></TodoInput>
          <TodoList></TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
