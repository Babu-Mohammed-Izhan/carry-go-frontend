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
  const [driverData, setdriverData] = useState([
    {
      name: 'Izhan',
      username: 'izhan',
      password: 'password',
      age: 20,
      email: 'babuizhan1234@gmail.com',
      mobileno: 9944545113,
      capacity: 100,
      truckno: 1297342,
      transporter: 'Izhan',
      experience: 3,
      routes: [
        { to: 'TamilNadu-Chennai', from: 'Andhra Pradesh-Alampur' },
        { to: 'asdarear', from: 'asdsad' },
        { to: 'asffaesd', from: 'adssaddad' },
      ],
      dealers: [{ '_id': '1' }],
    },
  ]);

  // useEffect(() => {
  //   const drivers = getDrivers(dealerInfo);
  //   setdriverData(drivers);
  // }, [dealerInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchData = searchDrivers(
      fromstate.name,
      fromcity.name,
      tostate.name,
      tocity.name
    );

    setdriverData(searchData);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Dealers</h1>
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center justify-center flex-col"
      >
        <div className="flex w-full">
          <div className="w-4/5">
            <h2>From</h2>
            <label>State</label>
            <Select
              options={states}
              labelField="name"
              valueField="name"
              onChange={(values) => setFromstate(values[0])}
            />
            <label>City</label>
            <Select
              options={cities[fromstate.name]}
              labelField="name"
              valueField="name"
              onChange={(values) => setFromcity(values[0])}
            />
          </div>
          <div className="w-4/5">
            <h2>To</h2>
            <label>State</label>
            <Select
              options={states}
              labelField="name"
              valueField="name"
              onChange={(values) => setTostate(values[0])}
            />
            <label>City</label>
            <Select
              options={cities[tostate.name]}
              labelField="name"
              valueField="name"
              onChange={(values) => setTocity(values[0])}
            />
          </div>
        </div>
        <input type="submit" />
      </form>
      <div className="flex flex-col items-center w-full">
        <h2 className="font-semibold text-xl my-14">Drivers</h2>
        {driverData
          ? driverData.map((driver) => {
              return <DriverCard driverdata={driver} dealerData={dealerInfo} />;
            })
          : 'Drivers not found'}
      </div>
    </div>
  );
};

export default Dealerhome;
