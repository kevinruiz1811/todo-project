import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function EditTodoPage() {
  return (
    <TodoForm 
      label="Editar TODO"
      submitText="Editar"
      submitEvent={() => console.log("Llamar ADDTODO")}
    />
  );
}

export { EditTodoPage };
