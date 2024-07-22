import axiosInstance from './axiosInstance';

export const fetchAllTrades = async () => {
  try {
    const response = await axiosInstance.get('/trades/getall');
    return response.data.AllTrades;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchSingleUserAllTrades = async (id) => {
  console.log("jwbewve jv", id)
    try {
      const response = await axiosInstance.get(`/trade/get/user/${id}`);
      console.log("werjkbcevbjkevbkjebvjkebvjerv", response.data)
      return response.data.UsersTardes;
    } catch (error) {
      console.error('Error fetching trades of the User:', error);
      throw error;
    }
  };
