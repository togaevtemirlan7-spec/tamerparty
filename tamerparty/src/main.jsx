import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import PersonPage from "./PersonPage";
import Admin from "./Admin";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/p/:id" element={<PersonPage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);
