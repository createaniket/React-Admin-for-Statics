import axiosInstance from './axiosInstance';

// Fetch all events
export const fetchAllEvents = async () => {
  try {
    const response = await axiosInstance.get('/events/getall');
    return response.data.events;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Fetch a single event by ID
export const fetchEventById = async (id) => {
  try {
    const response = await axiosInstance.get(`/events/get/${id}`);
    return response.data.event;
  } catch (error) {
    console.error('Error fetching event:', error);
    throw error;
  }
};

// Add a new event
export const addEvent = async (eventData) => {
  try {
    const response = await axiosInstance.post('/events/add', eventData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.event;
  } catch (error) {
    console.error('Error adding event:', error);
    throw error;
  }
};
