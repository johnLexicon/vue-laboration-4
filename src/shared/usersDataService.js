import axios from 'axios';
import { API } from './config';

const getAllUsers = async () => {
  try {
    const response = await axios.get(API.users);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getUser = async (userId) => {
  try {
    const response = await axios.get(`${API.users}/${userId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const addUser = async (user) => {
  try {
    const response = await axios.post(API.users, user);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const removeUser = async (userId) => {
  try {
    const response = await axios.delete(`${API.users}/${userId}`);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const usersDataService = {
  getAllUsers,
  getUser,
  addUser,
  removeUser,
};
