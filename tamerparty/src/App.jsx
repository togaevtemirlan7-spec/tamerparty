import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register.jsx";
import Admin from "./Admin.jsx";
import PersonPage from "./PersonPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/guest/:id" element={<PersonPage />} />
      </Routes>
    </BrowserRouter>
  );
}
