import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="page">
      <h1 className="title">TamerParty</h1>
      <p className="subtitle">Премиальная регистрация гостей</p>

      <Link to="/register" className="btn">Заполнить данные</Link>
      <Link to="/admin" className="btn-outline">Админ-панель</Link>
    </div>
  );
}
import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";
import ScannerPage from "./ScannerPage";

<Route path="/login" element={<AdminLogin />} />
<Route path="/admin" element={<AdminPage />} />
<Route path="/scanner" element={<ScannerPage />} />

