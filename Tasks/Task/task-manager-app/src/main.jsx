import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ManageDelete from "./ManageDelte";
import ManageEdit from "./ManageEdit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/delete-task/:id" element={<ManageDelete />} />
        <Route path="/edit-task/:id" element={<ManageEdit />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
