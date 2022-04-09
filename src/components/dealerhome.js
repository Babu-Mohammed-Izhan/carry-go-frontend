import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import { getDrivers, searchDrivers } from '../services/driverService';
import { cities, states } from '../utils/constants';
import DriverCard from './driverCard';

const Dealerhome = ({ dealerInfo }) => {
  const [fromstate, setFromstate] = useState({});
  const [fromcity, setFromcity] = useState({});
  const [tostate, setTostate] = useState({});
  const [tocity, setTocity] = useState({});
  const [driverData, setdriverData] = useState([]);

  useEffect(() => {
    const dri = async () => {
      const drivers = await getDrivers(dealerInfo);
      setdriverData(drivers);
    };
    dri();
  }, [dealerInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchData = await searchDrivers(
      fromstate.name,
      fromcity.name,
      tostate.name,
      tocity.name
    );

    setdriverData(searchData);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-xl">Dealer:{dealerInfo?.name}</h1>
      <form
        onSubmit={handleSubmit}
        className="flex md:w-1/2 w-10/12 mx-auto items-center justify-center flex-col mt-10"
      >
        <div className="flex w-full">
          <div className="w-4/5">
            <h2 className="font-bold text-2xl mb-2">From</h2>
            <label>State</label>
            <Select
              options={states}
              labelField="name"
              valueField="name"
              onChange={(values) => setFromstate(values[0])}
            />
            <label>City</label>
            <Select
              options={cities[fromstate?.name]}
              labelField="name"
              valueField="name"
              onChange={(values) => setFromcity(values[0])}
            />
          </div>
          <div className="w-4/5 ml-3">
            <h2 className="font-bold text-2xl mb-2">To</h2>
            <label>State</label>
            <Select
              options={states}
              labelField="name"
              valueField="name"
              onChange={(values) => setTostate(values[0])}
            />
            <label>City</label>
            <Select
              options={cities[tostate?.name]}
              labelField="name"
              valueField="name"
              onChange={(values) => setTocity(values[0])}
            />
          </div>
        </div>
        <input
          className=" w-full cursor-pointer my-10 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        />
      </form>
      <div className="flex flex-col items-center w-full">
        <h2 className="font-semibold text-3xl my-7">Available Drivers</h2>
        <div className="md:w-3/4 w-10/12 mx-auto">
          {driverData
            ? driverData.map((driver) => {
                return (
                  <DriverCard
                    driverdata={driver}
                    dealerData={dealerInfo}
                    key={driver._id}
                  />
                );
              })
            : 'Drivers not found'}
        </div>
      </div>
    </div>
  );
};

export default Dealerhome;
