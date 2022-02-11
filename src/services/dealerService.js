import axios from 'axois';

const getDealers = async (driverData) => {
  const dealerResponse = await axios.get('localhost:3001/api/dealer');
  const dealerData = dealerResponse.data;
  return dealerData;
};

export { getDealers };
