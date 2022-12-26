import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {
  return (
    <TodoForm 
      label="Crea tu nuevo TODO"
      submitText="Añadir"
      submitEvent={() => console.log("Llamar ADDTODO")}
    />
  );
}

export { NewTodoPage };
