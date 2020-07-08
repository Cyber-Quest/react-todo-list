import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <TodoItem></TodoItem>
      </div>
    );
  }
}
