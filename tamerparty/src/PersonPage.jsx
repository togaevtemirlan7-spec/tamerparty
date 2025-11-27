import React from "react";
import { useParams } from "react-router-dom";

export default function PersonPage() {
  const { id } = useParams();
  return (
    <div className="container">
      <h1>Гость #{id}</h1>
      <p>Здесь будет информация о госте.</p>
    </div>
  );
}

