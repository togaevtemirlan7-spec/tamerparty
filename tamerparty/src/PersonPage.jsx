import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function PersonPage({ id }) {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    async function loadGuest() {
      const { data } = await supabase
        .from("guests")
        .select("*")
        .eq("id", id)
        .single();

      setGuest(data);
    }
    loadGuest();
  }, [id]);

  if (!guest) {
    return <h2 style={{ textAlign: "center", paddingTop: "30px" }}>Загрузка...</h2>;
  }

  return (
    <div className="container">
      <h1>Гость</h1>

      <div className="admin-list">
        <p><b>Имя:</b> {guest.name}</p>
        <p><b>Возраст:</b> {guest.age}</p>
        <p><b>Instagram:</b> @{guest.
