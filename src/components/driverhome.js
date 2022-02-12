import React from 'react';

const Driverhome = ({ driverInfo }) => {
  console.log(driverInfo._id);
  return (
    <div>
      <h1>Driver</h1>
      {driverInfo.dealers
        ? driverInfo.dealers.map((dealer) => {
            return <div>{dealer.name}</div>;
          })
        : 'There are currently no dealers'}
    </div>
  );
};

export default Driverhome;
