import { fetchAllEvents } from 'API/event';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {addHall} from '../../../../API/hall'

const AddHall = () => {
    const [name, setName] = useState('');
    const [totalStalls, setTotalStalls] = useState('');
    const [initialStallNumber, setInitialStallNumber] = useState('');
    const [eventId, setEventId] = useState('');
    const [layoutFile, setLayoutFile] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
 


    const [events, setEvents] = useState([]);

    console.log("wkjebjkwebjk", events)



    const handleFileChange = (e) => {
        setLayoutFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('totalStalls', totalStalls);
        formData.append('initialStallNumber', initialStallNumber);
        formData.append('eventId', eventId);
        formData.append('layout', layoutFile);

        try {
            addHall(formData)
            alert('Hall added successfully!');
            console.log(response.data);
            navigate('/events/hall/all'); // Navigate to the halls list page or any other page you prefer
        } catch (error) {
            setError(error.response?.data?.error || 'An error occurred');
        }
    };


    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const allEvents = await fetchAllEvents();
            setEvents(allEvents);
          } catch (error) {
            console.error('Failed to fetch events', error);
          }
        };
    
        fetchEvents();
      }, []);

    return (
        <div className="container">
            <h2>Add Hall</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="name">Hall Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="totalStalls">Total Stalls</label>
                    <input
                        type="number"
                        id="totalStalls"
                        className="form-control"
                        value={totalStalls}
                        onChange={(e) => setTotalStalls(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="initialStallNumber">Initial Stall Number</label>
                    <input
                        type="text"
                        id="initialStallNumber"
                        className="form-control"
                        value={initialStallNumber}
                        onChange={(e) => setInitialStallNumber(e.target.value)}
                        required
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="eventId">Event ID</label>
                    <input
                        type="text"
                        id="eventId"
                        className="form-control"
                        value={eventId}
                        onChange={(e) => setEventId(e.target.value)}
                        required
                    />
                </div> */}
                    <div className="form-group">
                    <label htmlFor="eventId">Event</label>
                    <select
                        id="eventId"
                        className="form-control"
                        value={eventId}
                        onChange={(e) => setEventId(e.target.value)}
                        required
                    >
                        <option value="">Select Event</option>
                        {events.map((event) => (
                            <option key={event._id} value={event._id}>
                                {event.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="layout">Layout File</label>
                    <input
                        type="file"
                        id="layout"
                        className="form-control"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Hall</button>
            </form>
        </div>
    );
};

export default AddHall;
