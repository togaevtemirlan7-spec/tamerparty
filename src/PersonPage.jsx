import { useLocation } from "react-router-dom";

export default function PersonPage() {
  const location = useLocation();
  const guest = location.state?.guest;

  if (!guest) {
    return <h2>Гость не найден</h2>;
  }

  return (
    <div className="container">
      <h1>{guest.name}</h1>

      <p><b>Возраст:</b> {guest.age}</p>

      <p>
        <b>Instagram:</b> @{guest.instagram}
      </p>

      <img
        src={guest.photo}
        alt="Фото гостя"
        style={{ width: "200px", borderRadius: "10px" }}
      />

      <p>{guest.comment}</p>
    </div>
  );
}
