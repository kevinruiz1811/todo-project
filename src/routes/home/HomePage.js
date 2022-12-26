import React from "react";
import { useTodos } from "../useTodos";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { TodoForm } from "../../ui/TodoForm";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { Modal } from "../../ui/Modal";
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { ChangeAlert } from "../../ui/ChangeAlert";

function HomePage() {
  const { states, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchvalue,
    searchedTodos,
    openModal,
  } = states;

  const {
    setSearchValue,
    completeTodo,
    addTodo,
    deleteTodo,
    sincronizeTodos,
    setOpenModal,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchvalue={searchvalue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchvalue={searchvalue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearch={(searchText) => (
          <p>NO ha resultados para: {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };
