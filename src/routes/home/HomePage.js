import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTodos } from "../useTodos";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { ChangeAlert } from "../../ui/ChangeAlert";

function HomePage() {
  const navigate = useNavigate();
  const { states, stateUpdaters } = useTodos();
  const [params, setParams] = useSearchParams();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchvalue,
    searchedTodos,
  } = states;

  const { setSearchValue, completeTodo, deleteTodo, sincronizeTodos } =
    stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch
          searchvalue={searchvalue}
          setSearchValue={setSearchValue}
          params={params}
          setParams={setParams}
        />
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
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onEdit={() => {
              navigate("/edit/" + todo.id, {
                state: { todo },
              });
            }}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      <CreateTodoButton onClick={() => navigate("/new")} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };
