import React, { useState } from "react";
import { supabase } from "./supabase.js";
import QrScanner from "qr-scanner";

export default function Admin() {
  const [guest, setGuest] = useState(null);

  async function handleScan(result) {
    const id = result.data;

    const { data } = await supabase.from("guests").select("*").eq("id", id);

    if (data.length > 0) {
      setGuest(data[0]);
    }
  }

  return (
    <div className="container">
      <h1>Админ панель</h1>

      <p>Сканируй QR:</p>

      <video
        id="scanner"
        style={{ width: "300px", border: "2px solid gold" }}
      ></video>

      <button
        onClick={async () => {
          const video = document.getElementById("scanner");
          const scanner = new QrScanner(video, handleScan);
          scanner.start();
        }}
      >
        Включить сканер
      </button>

      {guest && (
        <div className="card">
          <h2>{guest.name}</h2>
          <p>Возраст: {guest.age}</p>
          <p>Instagram: {guest.instagram}</p>
          <p>Пол: {guest.gender}</p>
          <p>Комментарий: {guest.comment}</p>
        </div>
      )}
    </div>
  );
}


