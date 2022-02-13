import axios from 'axios';

const getDealers = async (driverData) => {
  const dealerResponse = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/dealer/${driverData}`
  );
  const dealerData = dealerResponse.data;
  return dealerData;
};

export { getDealers };
