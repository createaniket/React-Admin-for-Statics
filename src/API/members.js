import axiosInstance from './axiosInstance';

export const fetchAllUsers = async () => {
  try {
    const response = await axiosInstance.get('/user/getall');
    console.log("esrdtyjukcfgfhjk", response)
    return response.data.members;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};


export const VerifyUser = async (id) => {
  try {
    const response = await axiosInstance.post(`/user/verify/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};

// Add other user-related API calls here
