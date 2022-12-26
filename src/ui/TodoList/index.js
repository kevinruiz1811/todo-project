import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderFunction = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearch(props.searchvalue)}

      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunction)}
    </section>
  );
}

export { TodoList };
