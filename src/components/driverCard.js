import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DriverCard = ({ driverdata, dealerData }) => {
  const [driver, setDriver] = useState('');

  useEffect(() => {
    setDriver(driverdata);
  }, [driverdata]);

  const handleHire = async () => {
    const driverData = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/driver/${driverdata._id}`,
      { dealer: dealerData }
    );
    if (driverData.status) {
      setDriver(driverData.data);
    }
  };

  const checkUsername = (obj) => obj._id === dealerData._id;

  return (
    <div className="flex justify-between items-center w-full px-5 shadow-md my-5">
      <div>
        <h1>Name: {driver.name}</h1>
        <h1>Age: {driver.age}</h1>
        <h2>Mobile No: {driver.mobileno}</h2>
        <h2>Email: {driver.email}</h2>
        <h2>Experience: {driver.experience}</h2>
        {driver.routes &&
          driver.routes.map((r, idx) => {
            return (
              <div key={r.from}>
                <span className="font-bold">Route: {idx + 1}</span>
                <h2>From: {r.from}</h2>
                <h2>To: {r.to}</h2>
              </div>
            );
          })}
      </div>
      {driver.dealers && driver.dealers.some(checkUsername) ? (
        <div className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 ">
          Hired
        </div>
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

export default DriverCard;
