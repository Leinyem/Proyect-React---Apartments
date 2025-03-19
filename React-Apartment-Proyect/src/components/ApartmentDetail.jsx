import React from "react";
import { Link, useParams } from "react-router-dom";

function ApartmentDetail({ apartmentsState }) { 

   // Take apartments as PROPS
  const { apartmentId } = useParams();


  console.log('Apartment Id from URL:', apartmentId); 
  console.log('Apartments in state:', apartmentsState)




  // Buscar en apartmentsState, NO en el JSON
  const apartmentProfile = apartmentsState.find((apt) => String(apt.id) === String(apartmentId));

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
      <p>{apartmentProfile.price} p/night</p>
      <p>{apartmentProfile.minimum_nights} nights</p>
     
      <h4>Room Type: {apartmentProfile.room_type}</h4>

      <Link to="/">

        <button className="back-btn" onClick={() => window.scrollTo(0,0)}>
     
          Back to Home
        
        </button>

      </Link>
    </div>
  );
}

export default ApartmentDetail;
