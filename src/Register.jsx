import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [instagram, setInstagram] = useState("");
  const [gender, setGender] = useState("");
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrUrl, setQrUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from("guests") // 
      .insert([
        {
          name,
          age: Number(age),
          instagram,
          gender,
          comment,
          photo
        }
      ])
      .select("*")
      .single();

    setLoading(false);

    if (error) {
      alert("Ошибка при отправке данных");
      console.error(error);
      return;
    }

    const guestId = data.id;
    const url = `https://tamerparty.vercel.app/guest/${guestId}`;

    setQrUrl(url);
  }

  return (
    <div className="container">
      <h1>Регистрация на мероприятие</h1>

      {!qrUrl && (
        <form onSubmit={handleSubmit}>
          <label>Имя</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Возраст</label>
          <input
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label>Instagram (без @)</label>
          <input
            type="text"
            required
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />

          <label>Пол</label>
          <select
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Выбери</option>
            <option value="male">Мужчина</option>
            <option value="female">Женщина</option>
          </select>

          <label>Фото (вставь ссылку)</label>
          <input
            type="text"
            placeholder="https://example.com/photo.jpg"
            required
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          <label>Комментарий</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Отправка..." : "Отправить"}
          </button>
        </form>
      )}

      {qrUrl && (
        <div style={{ marginTop: 30 }}>
          <h2>Ваш QR-код</h2>

          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrUrl}`}
            alt="QR Code"
          />

          <p style={{ marginTop: 20 }}>
            Сохраните QR-код — он понадобится при входе.
          </p>

          <button onClick={() => navigate("/")}>
            Заполнить ещё раз
          </button>
        </div>
      )}
    </div>
  );
}


