import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabase";

export default function PersonPage() {
  const { id } = useParams();
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    loadGuest();
  }, []);

  async function loadGuest() {
    const { data } = await supabase.from("guests").select("*").eq("id", id);
    if (data && data.length > 0) setGuest(data[0]);
  }

  if (!guest) return <h1 style={{ color: "white" }}>Загрузка...</h1>;

  return (
    <div className="container">
      <h1>Информация о госте</h1>
      <p><b>Имя:</b> {guest.name}</p>
      <p><b>Возраст:</b> {guest.age}</p>
      <p><b>Instagram:</b> @{guest.instagram}</p>
      <p><b>Пол:</b> {guest.gender}</p>
      <p><b>Комментарий:</b> {guest.comment}</p>
    </div>
  );
}
