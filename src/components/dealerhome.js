import React from 'react';
import { useQuery } from 'react-query';
import { getDrivers } from '../services/driverService';

const Dealerhome = ({ dealerinfo }) => {
  const { isLoading, error, data } = useQuery('drivers', getDrivers());

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>Dealers</h1>
      <form>
        <div>
          <h2>From</h2>
          <label>State</label>
          <input value="from-state" />
          <label>City</label>
          <input value="from-city" />
        </div>
        <div>
          <h2>To</h2>
          <label>State</label>
          <input value="to-state" />
          <label>City</label>
          <input value="to-city" />
        </div>
      </form>
      {data &&
        data.map((driver) => {
          return <div>{driver.name}</div>;
        })}
    </div>
  );
};

export default Dealerhome;
