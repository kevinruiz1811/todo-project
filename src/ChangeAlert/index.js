import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Hubo cambios</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={() => toggleShow(false)}
          >
            Recargar página
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const ChangelaertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangelaertWithStorageListener };
