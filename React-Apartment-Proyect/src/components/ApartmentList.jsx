import React, { useState } from 'react'
import '../App.css'
import apartmentListData from "../assets/listings.json"
import score from "../assets/score.png"
export const ApartmentList = (apartmentsArray) => {
    const [apartments, setApartments] = useState (apartmentListData.results);
    function handleDelete(theApartmentId) {
      const filteredApartment = apartments.filter((oneApartment) => oneApartment.id !== theApartmentId);
      setApartments(filteredApartment);
    }
    return (
      <div className="displayApartment">
        <div className="apartment-container">
          {apartmentsArray.map((currentApartment)=>{
            return (
                <div key={currentApartment.id} className="apartment-card">
                <img src={currentApartment.picture_url} id ="apart-img" alt="apartment picture" />
                    <h6>{currentApartment.name}</h6>
                    <h6><img src={score} id ="score-img" alt="score" /> {currentApartment.review_scores_rating} </h6>
                    <h6>{currentApartment.price} night</h6> 
                    <h6>Minimum Nights: {currentApartment.minimum_nights}</h6>
                    <h6><a href={currentApartment.listing_url}>Apartment Photo Gallery</a></h6>
                    <button onClick={() => {handleDelete(currentApartment.id); }}> Delete</button>
                </div>
            )
          })};
        </div>
      </div>
    )
};
export default ApartmentList; 