import React from 'react';

const Driverhome = ({ driverInfo }) => {
  console.log(driverInfo._id);
  return (
    <div>
      <h1>Driver</h1>
      {driverInfo.dealers &&
        driverInfo.dealers.map((dealer) => {
          return <div>{dealer.name}</div>;
        })}
    </div>
  );
};

export default Driverhome;
