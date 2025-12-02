import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const ADMIN_PASSWORD = "temirlan123"; // ← твой пароль

  function login() {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("admin", "ok");
      navigate("/admin");
    } else {
      alert("Неверный пароль!");
    }
  }

  return (
    <div className="container">
      <h1>Вход в админ панель</h1>

      <input
        type="password"
        placeholder="Пароль"
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 10, marginTop: 20 }}
      />

      <button
        onClick={login}
        style={{ marginTop: 20, width: "100%", padding: 10 }}
      >
        Войти
      </button>
    </div>
  );
}
