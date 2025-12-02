import { useState } from "react";

export default function Login() {
  const [pass, setPass] = useState("");

  const ADMIN_PASS = "tameradmin"; // 

  const login = () => {
    if (pass === ADMIN_PASS) {
      localStorage.setItem("admin", "yes");
      window.location.href = "/admin";
    } else {
      alert("Неверный пароль");
    }
  };

  return (
    <div className="container">
      <h1>Вход в админку</h1>
      <input
        type="password"
        placeholder="Пароль"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={login}>Войти</button>
    </div>
  );
}
