import axios from 'axois';

const getDrivers = async (dealerData) => {
  const driverResponse = await axios.get('localhost:3001/api/driver');
  const driverData = driverResponse.data;
  return driverData;
};

export { getDrivers };
