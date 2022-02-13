import React from 'react';

const DealerCard = ({ dealerData }) => {
  return (
    <div className="flex w-3/4 mx-auto justify-between shadow-lg rounded p-2">
      <div>
        <h1>Name: {dealerData.name}</h1>
        <p>Mobile No: {dealerData.mobileno}</p>
        <p>State: {dealerData.state}</p>
        <p>City: {dealerData.city}</p>
      </div>
      <div>
        <h1>Nature: {dealerData.nature}</h1>
        <p>Quantity: {dealerData.quantity}</p>
        <p>Weight: {dealerData.weigth}kg</p>
      </div>
    </div>
  );
};

export default DealerCard;
