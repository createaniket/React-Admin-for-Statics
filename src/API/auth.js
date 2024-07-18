import axiosInstance from './axiosInstance';

export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    const token = response.data.token;
    if (token) {
      localStorage.setItem('token', token); // Store the token
    }
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Add other authentication-related API calls here
