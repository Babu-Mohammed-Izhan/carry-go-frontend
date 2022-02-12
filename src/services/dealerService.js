import axios from 'axios';

const getDealers = async (driverData) => {
  const dealerResponse = await axios.get(
    `http://localhost:3001/api/dealer/${driverData}`
  );
  const dealerData = dealerResponse.data;
  return dealerData;
};

export { getDealers };
