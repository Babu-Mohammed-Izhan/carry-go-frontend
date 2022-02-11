import React from 'react';
import { useQuery } from 'react-query';
import { getDealers } from '../services/dealerService';

const Driverhome = ({ driverInfo }) => {
  const { isLoading, error, data } = useQuery('dealers', getDealers());

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>Driver</h1>
      {data &&
        data.map((dealer) => {
          return <div>{dealer.name}</div>;
        })}
    </div>
  );
};

export default Driverhome;
