import React from 'react'
import { Link, useParams } from 'react-router-dom'
import detailArray from "../assets/listings.json"
function ApartmentDetail() {
    const {apartmentId} = useParams();
    const apartmentDetailArray = detailArray.results.filter((oneApartment) => oneApartment.id === Number(apartmentId));
    const apartmentProfile = apartmentDetailArray[0];
  return (
    <div className="detail-container">
    <h2>{apartmentProfile.name}</h2>
    <figure>
      <img src={apartmentProfile.picture_url} alt={apartmentProfile.name} />
    </figure>
    <h3>
      {apartmentProfile.neighbourhood} ({apartmentProfile.neighbourhood_cleansed})
    </h3>
    <p>{apartmentProfile.price} /night</p>
    <p>{apartmentProfile.neighborhood_overview}</p>
    <p>{apartmentProfile.description}</p>
    <h4>Room Type: {apartmentProfile.room_type}</h4>
   
    {/* Amenities Section */}
    <div className='amenities-container'>
        <h3 className='amenities-title'>Amenities</h3>
    <p>{apartmentProfile.amenities} /night</p>

    </div>

    {/* Scores Section */}
    <div className="scores-container">
      <h3 className="scores-title">All Valuations</h3>
      <div className="score-grid">
        <div className="score-item">
        <span className="score-label">Check-in</span>
          <span className="score-value">{apartmentProfile.review_scores_checkin}</span>
        </div>
        <div className="score-item">
        <span className="score-label">Cleanliness</span>
          <span className="score-value">{apartmentProfile.review_scores_cleanliness}</span>
        </div>
        <div className="score-item">
        <span className="score-label">Communication</span>
          <span className="score-value">{apartmentProfile.review_scores_communication}</span>
        </div>
        <div className="score-item">
        <span className="score-label">Location</span>
          <span className="score-value">{apartmentProfile.review_scores_location}</span>
        </div>
        <div className="score-item">
        <span className="score-label">Accuracy</span>
          <span className="score-value">{apartmentProfile.review_scores_accuracy}</span>
        </div>
      </div>
    </div>

    <Link to="/">
      <button className="back-btn">Back to Home</button>
    </Link>
  </div>
);
};

export default ApartmentDetail;