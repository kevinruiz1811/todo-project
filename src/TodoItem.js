import React from "react";

function TodoItem(props) {
  return (
    <section>
      <ul>
        <li>{props.text}</li>
      </ul>
    </section>
  );
}

export { TodoItem };
