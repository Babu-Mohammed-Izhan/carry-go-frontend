import axios from 'axios';

const getDrivers = async (dealerData) => {
  const driverResponse = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/driver?location=${dealerData.state}-${dealerData.city}`
  );
  const driverData = driverResponse.data;
  return driverData;
};

const searchDrivers = async (fromstate, fromcity, tostate, tocity) => {
  const driverResponse = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/driver?from=${fromstate}-${fromcity}&to=${tostate}-${tocity}`
  );
  const driverSearchData = driverResponse.data;

  return driverSearchData;
};

export { getDrivers, searchDrivers };
