import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (pass === "tamer123") {
      navigate("/admin");
    } else {
      alert("Неверный пароль");
    }
  }

  return (
    <div className="container">
      <h1>Вход в админку</h1>
      <input
        type="password"
        placeholder="Введите пароль"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
}
