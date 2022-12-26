import React from "react";

function TodoHeader({ children, loading }) {
  let cloneElement = React.Children.toArray(children).map((child) =>
    React.cloneElement(child, { loading })
  );

  return <header>{cloneElement}</header>;
}

export { TodoHeader };
