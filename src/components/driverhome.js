import React from 'react';
import DealerCard from './dealerCard';

const Driverhome = ({ driverInfo }) => {
  console.log(driverInfo);
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="font-bold text-xl my-10">Driver: {driverInfo.name}</h1>
      <h2 className="font-bold text-lg my-5">Available Dealers</h2>
      {driverInfo.dealers && driverInfo.dealers.length > 0
        ? driverInfo.dealers.map((dealer) => {
            return <DealerCard dealerData={dealer} />;
          })
        : 'There are currently no dealers'}
    </div>
  );
};

export default Driverhome;
