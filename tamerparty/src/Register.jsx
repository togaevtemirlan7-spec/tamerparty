import React, { useState } from "react";
import { supabase } from "./supabase.js";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    instagram: "",
    gender: "",
    comment: "",
  });

  const [successId, setSuccessId] = useState(null);

  async function sendForm() {
    const { data, error } = await supabase
      .from("guests")
      .insert([form])
      .select("id");

    if (error) {
      alert("Ошибка!");
      console.log(error);
    } else {
      setSuccessId(data[0].id);
    }
  }

  if (successId) {
    return (
      <div className="container">
        <h1>Готово!</h1>
        <p>Ваш QR-код:</p>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${successId}`} />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>TamerParty</h1>

      <input placeholder="Имя" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Возраст" onChange={e => setForm({...form, age: e.target.value})} />
      <input placeholder="Instagram" onChange={e => setForm({...form, instagram: e.target.value})} />
      <input placeholder="Пол (м/ж)" onChange={e => setForm({...form, gender: e.target.value})} />
      <input placeholder="Комментарий" onChange={e => setForm({...form, comment: e.target.value})} />

      <button onClick={sendForm}>Готово</button>
    </div>
  );
}

