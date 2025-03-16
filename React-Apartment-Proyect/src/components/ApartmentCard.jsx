import React from 'react'
import { Link } from 'react-router-dom';
import score from "../assets/score.png";
import bin from "../assets/bin.png";
import '../App.css';  


const ApartmentCard = ({
    id,
    picture_url,
    name,
    review_scores_rating,
    price,
    minimum_nights,
    handleDelete
}) => {
  return (
    <div className="apartment-card">

      <img src={picture_url} id="apart-img" alt="apartment picture" />

      <h6>{name}</h6>
      <h6><img src={score} id="score-img" alt="score" /> {review_scores_rating} </h6>
      <h6>{price} night</h6>
      <h6>Minimum Nights: {minimum_nights}</h6>


      <div className="btn-card">

        <button onClick={() => { handleDelete(id); }}>

          <img src={bin} alt="Delete" />

        </button>

        <Link to={`/ApartmentDetail/${id}`}>

          <button>Details</button>

        </Link>
        
      </div>
    </div>
  );
};

export default ApartmentCard;
