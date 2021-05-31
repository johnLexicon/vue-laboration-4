import axios from 'axios';
import { API } from './config';

const loginAdmin = async (email, password) => {
  try {
    const response = await axios.post(`${API.admins}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const mockLoginAdmin = (email, password) => {
  try {
    const response = await axios.get(`${API.admins}`);
    return response.data;
  } catch(err){
    console.log(err);
    return null;
  }
}

export const adminsDataService = {
  loginAdmin: process.env.NODE_ENV === 'production' ? loginAdmin : mockLoginAdmin
};
