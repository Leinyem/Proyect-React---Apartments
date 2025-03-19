import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CreateNewApartment = (props) => {
  const [name, setName] = useState("");
  const [picture_url, setPicture] = useState("");
  const [neighbourhood, setNeighborhood] = useState("");
  const [price, setPrice] = useState("");
  const [minimum_nights, setMinimumNights] = useState("");
  const [room_type, setRoomType] = useState("");


  const nav = useNavigate();

  function handleCreateApartment(event) {
    event.preventDefault();

    if (
      !name ||
      !picture_url ||
      !price ||
      !neighbourhood ||
      !room_type
    ) {
      alert("Please fill in all fields!");
      return;
    }

    const newApartToAdd = {
      id: uuidv4(),
      name,
      picture_url,
      neighbourhood,
      price,
      room_type,
      minimum_nights,
    };

    console.log("New Apartment ID:", newApartToAdd.id);

    props.setApartmentsState([newApartToAdd, ...props.apartmentsState]);

    window.scrollTo(0, 0);

    nav("/");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleCreateApartment}>
        <h2>Create New Apartment</h2>

        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="picture_url">Apartment Picture:</label>
          <input
            type="text"
            id="picture_url"
            name="picture_url"
            placeholder="Picture URL"
            value={picture_url}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="$00.00"
            min={1}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="neighborhood">Neighborhood:</label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            placeholder="Neighborhood"
            value={neighbourhood}
            onChange={(e) => setNeighborhood(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="">Minimum Nights:</label>
          <textarea

            id="minNight"
            name="minNight"
            placeholder="minNight"
            value={minimum_nights}
            onChange={(e) => setMinimumNights(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="room_type">Room Type:</label>
          <select
            id="room_type"
            name="room_type"
            value={room_type}
            
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="">Select a room type</option>
            <option value="Entire home/apt">Entire Home/Apt</option>
            <option value="Private Room">Private Room</option>

          </select>
        </div>

        <button className="submit-btn">Create</button>
      </form>
    </div>
  );
};

export default CreateNewApartment;
