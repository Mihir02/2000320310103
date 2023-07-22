import axios from 'axios';

const BASE_URL = 'http://your-backend-api-url'; // Replace with your backend API URL

export const getAllTrains = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trains`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all trains:', error);
    return [];
  }
};

export const getSingleTrain = async (trainId) => {
  try {
    const response = await axios.get(`${BASE_URL}/trains/${trainId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching single train:', error);
    return null;
  }
};
