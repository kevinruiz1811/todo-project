import React from "react";
import { TodoItem } from "./TodoItem";

const todos = [
  { text: "Cortar cebolla", complete: false },
  { text: "Tomar el curso de intro react", complete: false },
  { text: "Llorar con la llorona", complete: false },
];

function TodoList() {
  return todos.map((todo) => <TodoItem key={todo.text} text={todo.text} />);
}

export { TodoList };
