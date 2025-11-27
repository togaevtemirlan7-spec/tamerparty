import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import QrScanner from "qr-scanner";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [guests, setGuests] = useState([]);
  const [cameraActive, setCameraActive] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  async function loadGuests() {
    const { data } = await supabase.from("guests").select("*").order("created_at", { ascending: false });
    setGuests(data);
  }

  function login() {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setLogged(true);
      loadGuests();
    } else {
      alert("Неверный пароль");
    }
  }

  function startScanner() {
    setCameraActive(true);

    const video = document.getElementById("scanner");

    const scanner = new QrScanner(
      video,
      (result) => {
        setScanResult(result.data);
        window.location.href = `/p/${result.data}`;
      },
      { highlightScanRegion: true }
    );

    scanner.start();
  }

  if (!logged) {
    return (
      <div className="container">
        <h1>Admin</h1>
        <input
          placeholder="Пароль администратора"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Войти</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Админ панель</h1>
