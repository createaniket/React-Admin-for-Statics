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
            if (key !== 'images') { // Corrected from 'event_images' to 'images'
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
            <h1>Events</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {events && events.map((event) => (
                        <li key={event._id}>
                            {event.name}
                            <button onClick={() => fetchSingleEvent(event._id)}>View</button>
                        </li>
                    ))}
                </ul>
            )}
            {singleEvent && (
                <div>
                    <h2>{singleEvent.name}</h2>
                    <p>{singleEvent.description}</p>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Event Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="date">Event Date:</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="type">Event Type:</label>
                    <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="guidelines">Guidelines:</label>
                    <textarea id="guidelines" name="guidelines" value={formData.guidelines} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="registrationDeadline">Registration Deadline:</label>
                    <input type="date" id="registrationDeadline" name="registrationDeadline" value={formData.registrationDeadline} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="images">Event Images:</label>
                    <input type="file" id="images" name="images" multiple onChange={handleFileChange} />
                </div>
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default Addevents;
