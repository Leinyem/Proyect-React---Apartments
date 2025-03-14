import React, { useState } from 'react'
import ApartmentCard from './ApartmentCard';
export const ApartmentList = ({apartmentsArray, setApartmentsArray}) => {
    function handleDelete(theApartmentId) {
      const filteredApartment = apartmentsArray.filter((oneApartment) => oneApartment.id !== theApartmentId);
      setApartmentsArray(filteredApartment);
    }
    return (
      <div className="displayApartment">
        <div className="apartment-container">
          {apartmentsArray.map((currentApartment)=>{
            return (
              <div key={currentApartment.id}>
              <ApartmentCard {...currentApartment} handleDelete={handleDelete}/>
            </div>
            )
          } )};
        </div>
      </div>
    )
};
export default ApartmentList; 