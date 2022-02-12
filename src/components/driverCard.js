import React from 'react';
import axios from 'axios';

const driverCard = ({ driverdata, dealerData }) => {
  const handleHire = () => {
    const driverData = axios.put('http://localhost:3001/api/driver', {});
  };

  const checkUsername = (obj) => obj._id === dealerData._id;

  return (
    <div className="flex justify-between w-full px-16">
      <h1>Name:{driverdata.name}</h1>
      <h1>Age:{driverdata.age}</h1>
      {driverdata.dealers.some(checkUsername) ? (
        <div>Hired</div>
      ) : (
        <button onClick={() => handleHire()}>Hire</button>
      )}
    </div>
  );
};

export default driverCard;
