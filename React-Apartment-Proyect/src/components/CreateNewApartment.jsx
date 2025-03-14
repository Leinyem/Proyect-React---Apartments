import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const CreateNewApartment = (props) => {
  const [name, setName] = useState("");
  const [picture_url, setPicture] = useState("");
  const [neighbourhood, setNeighborhood] = useState("");
  const [price, setPrice] = useState("");
  const [neighborhood_overview, setNeigborhoodOverview] = useState("");
  const [description, setDescription] = useState("");
  const [room_type, setRoomType] = useState("");

  //ability to navigate in js
  const nav = useNavigate();
  function handleCreateApartment(event) {
    //always with a form, prevent the page from reloading first
    event.preventDefault();

    const newApartToAdd = {
      id: uuidv4(),
      name,
      picture_url,
      neighbourhood,
      price,
      neighborhood_overview,
      description,
      room_type,
    };
    props.setPetsState([newApartToAdd, ...props.petsState]);
    nav("/");
  }
  return (
    <div className="form-container">
    <form onSubmit={handleCreateApartment}>
      <h2>Create New Apartment</h2>

      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Apartment Picture:</label>
        <input
          type="text"
          placeholder="Picture URL"
          value={picture_url}
          onChange={(e) => setPicture(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Price:</label>
        <input
          type="number"
          placeholder="$00.00"
          min={1}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Neighborhood:</label>
        <input
          type="text"
          placeholder="Neighborhood"
          value={neighbourhood}
          onChange={(e) => setNeighborhood(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Neighborhood Overview:</label>
        <textarea
          placeholder="Brief overview"
          value={neighborhood_overview}
          onChange={(e) => setNeighborhoodOverview(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Description:</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Room Type:</label>
        <input
          type="text"
          placeholder="Room Type"
          value={room_type}
          onChange={(e) => setRoomType(e.target.value)}
        />
      </div>

      <button className="submit-btn">Create</button>
    </form>
  </div>
);
};
export default CreateNewApartment