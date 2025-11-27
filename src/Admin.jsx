import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function Admin() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    loadGuests();
  }, []);

  async function loadGuests() {
    const { data, error } = await supabase.from("guests").select("*");
    if (!error) setGuests(data);
  }

  return (
    <div className="container">
      <h1>Админ панель</h1>

      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Instagram</th>
            <th>Комментарий</th>
          </tr>
        </thead>

        <tbody>
          {guests.map((g) => (
            <tr key={g.id}>
              <td>{g.name}</td>
              <td>{g.age}</td>
              <td>{g.instagram}</td>
              <td>{g.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
