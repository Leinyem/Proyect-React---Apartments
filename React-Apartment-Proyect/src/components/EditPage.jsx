import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = (props) => {
  const [name, setName] = useState("");
  const [picture_url, setPicture] = useState("");
  const [neighbourhood, setNeighborhood] = useState("");
  const [price, setPrice] = useState("");
  const [minimum_nights, setMinimumNights] = useState("");
  const [room_type, setRoomType] = useState("");

  const nav = useNavigate();
  const { apartmentId } = useParams();

  useEffect(() => {
    if (props.apartmentsState.length === 0) return;

    const toUpdateApartment = props.apartmentsState.find(
      (oneApartment) => oneApartment.id.toString() === apartmentId.toString()
    );

    if (!toUpdateApartment) {
      console.error("Apartamento no encontrado");
      return;
    }

    setName(toUpdateApartment.name);
    setPicture(toUpdateApartment.picture_url);
    setNeighborhood(toUpdateApartment.neighbourhood);
    setPrice(toUpdateApartment.price);
    setRoomType(toUpdateApartment.room_type);
    setMinimumNights(toUpdateApartment.minimum_nights);
  }, [props.apartmentsState, apartmentId]);

  function handleUpdateApartment(event) {
    event.preventDefault();
    window.scrollTo(0, 0);

    const updatedApartment = {
      id: apartmentId,
      name,
      picture_url,
      neighbourhood,
      price,
      minimum_nights,
      room_type,
    };

    const updatedApartmentArray = props.apartmentsState.map((oneApartment) =>
      oneApartment.id.toString() === apartmentId.toString() ? updatedApartment : oneApartment
    );

    props.setApartmentsState(updatedApartmentArray);

    console.log("Apartamento actualizado:", updatedApartment);
    nav("/");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleUpdateApartment}>
        <h2>Update Apartment</h2>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Apartment Picture:</label>
          <input type="text" value={picture_url} onChange={(e) => setPicture(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Minimum Nights:</label>
          <input type="text" value={minimum_nights} onChange={(e) => setMinimumNights(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Neighborhood:</label>
          <input type="text" value={neighbourhood} onChange={(e) => setNeighborhood(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Type:</label>
          <input type="text" value={room_type} onChange={(e) => setRoomType(e.target.value)} />
        </div>
        <button className="submit-btn">Submit Update</button>
      </form>
    </div>
  );
};

export default EditPage;
