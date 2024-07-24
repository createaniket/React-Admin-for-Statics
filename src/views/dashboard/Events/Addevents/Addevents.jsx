import React, { useEffect, useState } from 'react';
import { fetchAllEvents, fetchEventById, addEvent } from '../../../../API/event';

const Addevents = () => {
  const [events, setEvents] = useState([]);
  const [singleEvent, setSingleEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    type: '',
    description: '',
    guidelines: '',
    status: 'open',
    registrationDeadline: '',
    images: []
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const allEvents = await fetchAllEvents();
        setEvents(allEvents);
      } catch (error) {
        console.error('Failed to fetch events', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: e.target.files
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append all form data
    for (let key in formData) {
      if (key !== 'images') {
        // Corrected from 'event_images' to 'images'
        data.append(key, formData[key]);
      }
    }

    // Append images
    for (let i = 0; i < formData.images.length; i++) {
      data.append('images', formData.images[i]);
    }

    try {
      await addEvent(data);
      alert('Event added successfully!');
      // Optionally, you can reset the form here
      setFormData({
        name: '',
        date: '',
        type: '',
        description: '',
        guidelines: '',
        status: 'open',
        registrationDeadline: '',
        images: []
      });
    } catch (error) {
      console.error('Failed to add event', error);
    }
  };

  const fetchSingleEvent = async (id) => {
    setLoading(true);
    try {
      const event = await fetchEventById(id);
      setSingleEvent(event);
    } catch (error) {
      console.error('Failed to fetch event', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Add Event</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Event Name:</label>
              <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="date">Event Date:</label>
              <input type="date" id="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="type">Event Type:</label>
              <input type="text" id="type" name="type" className="form-control" value={formData.type} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="guidelines">Guidelines:</label>
              <textarea
                id="guidelines"
                name="guidelines"
                className="form-control"
                value={formData.guidelines}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="registrationDeadline">Registration Deadline:</label>
              <input
                type="date"
                id="registrationDeadline"
                name="registrationDeadline"
                className="form-control"
                value={formData.registrationDeadline}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="images">Event Images:</label>
              <input type="file" id="images" name="images" className="form-control" multiple onChange={handleFileChange} />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Event
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Addevents;
