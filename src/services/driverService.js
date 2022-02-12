import axios from 'axios';

const getDrivers = async (dealerData) => {
  const driverResponse = await axios.get(
    `http://localhost:3001/api/driver?location=${dealerData.state}-${dealerData.city}`
  );
  const driverData = driverResponse.data;
  return driverData;
};

const searchDrivers = async (fromstate, fromcity, tostate, tocity) => {
  const driverResponse = await axios.get(
    `http://localhost:3001/api/driver?from=${fromstate}-${fromcity}&to=${tostate}-${tocity}`
  );
  const driverSearchData = driverResponse.data;

  return driverSearchData;
};

export { getDrivers, searchDrivers };
