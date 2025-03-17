import React from "react";
import { Link, useParams } from "react-router-dom";

function ApartmentDetail({ apartmentsState }) {  // Recibir los apartamentos como prop
  const { apartmentId } = useParams();

  // Buscar en apartmentsState, NO en el JSON
  const apartmentProfile = apartmentsState.find((apt) => apt.id === apartmentId);

  if (!apartmentProfile) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="detail-container">
      <h2>{apartmentProfile.name}</h2>
      <figure>
        <img src={apartmentProfile.picture_url} alt={apartmentProfile.name} />
      </figure>
      <h3>{apartmentProfile.neighbourhood}</h3>
      <p>{apartmentProfile.price} /night</p>
      <p>{apartmentProfile.neighborhood_overview}</p>
      <p>{apartmentProfile.description}</p>
      <h4>Room Type: {apartmentProfile.room_type}</h4>

      <Link to="/">
        <button className="back-btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default ApartmentDetail;
