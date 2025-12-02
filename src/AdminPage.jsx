import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

export default function AdminPage() {
  const [guests, setGuests] = useState([]);
  const navigate = useNavigate();

  // Защита панели
  useEffect(() => {
    if (localStorage.getItem("admin") !== "ok") {
      navigate("/login");
    }
  }, []);

  // Загрузка гостей
  async function loadGuests() {
    const { data, error } = await supabase
      .from("guests1") // твоя таблица
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setGuests(data);
  }

  useEffect(() => {
    loadGuests();
  }, []);

  // Удаление гостя
  async function deleteGuest(id) {
    const yes = confirm("Удалить?");
    if (!yes) return;

    await supabase.from("guests1").delete().eq("id", id);
    loadGuests();
  }

  return (
    <div className="container">
      <h1>Админ Панель</h1>

      <button onClick={() => navigate("/scanner")}>Сканер QR</button>

      {guests.map((g) => (
        <div
          key={g.id}
          style={{
            border: "1px solid #555",
            padding: 15,
            marginTop: 20,
            borderRadius: 8
          }}
        >
          <p><b>Имя:</b> {g.name}</p>
          <p><b>Возраст:</b> {g.age}</p>
          <p><b>Instagram:</b> @{g.instagram}</p>
          <p><b>Пол:</b> {g.gender}</p>
          <p><b>Комментарий:</b> {g.comment}</p>

          {g.photo && (
            <img
              src={g.photo}
              style={{ width: 120, borderRadius: 8, marginTop: 10 }}
            />
          )}

          <button
            onClick={() => deleteGuest(g.id)}
            style={{
              marginTop: 10,
              background: "red",
              color: "white",
              padding: 8,
              borderRadius: 6
            }}
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
}
