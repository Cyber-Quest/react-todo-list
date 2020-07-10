import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <TodoInput>Vs test</TodoInput>
          <TodoList></TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
