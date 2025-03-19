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

 {/* Scores Section */}
 <div className="scores-container">
      <h3 className="scores-title">All Valuations</h3>
      <div className="score-grid">
        <div className="score-item">
        <span className="score-label">Check-in</span>
          <span className="score-value">{apartmentProfile?.review_scores_checkin} </span>
        </div>
        <div className="score-item">
        <span className="score-label">Cleanliness</span>
          <span className="score-value">{apartmentProfile?.review_scores_cleanliness}</span>
        </div>
        <div className="score-item">
        <span className="score-label">Communication</span>
          <span className="score-value">{apartmentProfile?.review_scores_checkin}</span>
        </div>
        <div className="score-item">
        <span className="score-label">Location</span>
          <span className="score-value">{apartmentProfile?.review_scores_location}</span>
        </div>
        <div className="score-item">
        <span className="score-label">Accuracy</span>
          <span className="score-value">{apartmentProfile?.review_scores_accuracy}</span>
        </div>
      </div>
    </div>
      <Link to="/">
        <button className="back-btn" onClick={() => window.scrollTo(0,0)}>
          Back to Home
        </button>
      </Link>
    </div>
  );
}
export default ApartmentDetail;