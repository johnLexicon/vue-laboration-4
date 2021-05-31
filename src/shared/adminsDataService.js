import axios from 'axios';
import { API } from './config';

const signInAdmin = async (email, password) => {
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

const mockSignInAdmin = (email, password) => {
  try {
    const response = await axios.get(`${API.admins}`);
    const admin = response.data.find(admin => admin.email.toLowerCase() === email.toLowerCase());
    if(!admin){
      console.log(`Admin with email ${email} not found.`);
      return null;
    }

    if(admin.password !== password){
      console.log('Authentication failed.');
      return null;
    }
    
    return admin;
    
  } catch(err){
    console.log(err);
    return null;
  }
}

export const adminsDataService = {
  signInAdmin: process.env.NODE_ENV === 'production' ? signInAdmin : mockSignInAdmin
};
