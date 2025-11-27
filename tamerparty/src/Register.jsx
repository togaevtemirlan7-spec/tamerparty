import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import QRCode from "qrcode.react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    instagram: "",
    gender: "M",
    comment: "",
  });

  const [created, setCreated] = useState(null);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("guests")
      .insert([{
        name: form.name,
        age: form.age,
        instagram: form.instagram,
        gender: form.gender,
        comment: form.comment
      }])
      .select()
      .single();

    if (error) {
      alert("Ошибка: " + error.message);
      return;
    }

    const url = `${window.location.origin}/p/${data.id}`;
    setCreated({ id: data.id, url });
  };

  return (
    <div className="card">
      <h2>Регистрация</h2>

      {!created && (
        <form onSubmit={submit} className="form">
          <input name="name" placeholder="Имя" onChange={handle} required />
          <input name="age" placeholder="Возраст" onChange={handle} />
          <input name="instagram" placeholder="Instagram (без @)" onChange={handle} />

          <label>
            Пол:
            <div>
              <label><input type="radio" name="gender" value="M" defaultChecked /> М</label>
              <label><input type="radio" name="gender" value="F" /> Ж</label>
            </div>
          </label>

          <textarea name="comment" placeholder="Комментарий" onChange={handle} />

          <button className="btn gold">Получить QR</button>
        </form>
      )}

      {created && (
        <div className="result">
          <p>Ваш QR-код:</p>
          <QRCode value={created.url} size={220} />

          <a href={created.url} className="btn">Открыть профиль</a>
        </div>
      )}
    </div>
  );
}
