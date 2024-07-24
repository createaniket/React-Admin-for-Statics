import axiosInstance from "./axiosInstance";

// Add a new event
export const addHall = async (HallData) => {
    try {
      const response = await axiosInstance.post('/hall/add', HallData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.HALL;
    } catch (error) {
      console.error('Error adding Hall:', error);
      throw error;
    }
  };
  


  // Fetch all events
export const fetchAllHalls = async () => {
    try {
      const response = await axiosInstance.get('/hall/getall');
      console.log("efvhjbevjhvvjkbvjkwsss", response)
      return response.data.halls;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  };
  