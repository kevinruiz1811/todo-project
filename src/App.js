// import logo from './logo.svg';
// import "./App.css";
import React from "react";
import {TodoCounter} from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch />

      <TodoList />

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
