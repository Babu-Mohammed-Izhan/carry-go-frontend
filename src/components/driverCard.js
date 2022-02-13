import React from 'react';
import axios from 'axios';

const driverCard = ({ driverdata, dealerData }) => {
  const handleHire = async () => {
    const driverData = await axios.put(
      `http://localhost:3001/api/driver/${driverdata._id}`,
      { dealer: dealerData }
    );

    console.log(driverData);
  };

  const checkUsername = (obj) => obj._id === dealerData._id;

  return (
    <div className="flex justify-between items-center w-full px-5 h-16 shadow-md">
      <div>
        <h1>Name:{driverdata.name}</h1>
        <h1>Age:{driverdata.age}</h1>
      </div>
      {driverdata.dealers.some(checkUsername) ? (
        <div>Hired</div>
      ) : (
        <button
          className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => handleHire()}
        >
          Hire
        </button>
      )}
    </div>
  );
};

export default driverCard;
