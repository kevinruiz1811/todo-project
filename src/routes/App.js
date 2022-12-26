import React from "react";
import { HomePage } from "./home/HomePage";
import { NewTodoPage } from "./new/NewTodoPage";
import { EditTodoPage } from "./edit/EditTodoPage";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>NOT FOUND</p>} />
      </Routes>
    </HashRouter>
  );
}

export { App };
