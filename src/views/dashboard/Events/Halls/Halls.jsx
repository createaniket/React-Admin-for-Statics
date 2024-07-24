import React, { useEffect, useState } from 'react';
import Hallscard from './Hallscard';
import { fetchAllHalls } from '../../../../API/hall';
import './Halls.scss'

const Halls = () => {
  const [halls, setHalls] = useState(null);
  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const data = await fetchAllHalls();
        console.log('Fetched halls data:', data);
        if (Array.isArray(data)) {
          setHalls(data);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching Halls:', error);
      }
    };
    fetchHalls();
  }, []);
  return (
    <div className="events-container">
      <p className="eventshead">All Halls</p>
      <div className="allhalls-section">
        {halls === null ? (
          <p>Loading...</p>
        ) : halls.length > 0 ? (
          halls.map((hall) => <Hallscard key={hall._id} hall={hall} />)
        ) : (
          <p>No Data to show here</p>
        )}
      </div>
    </div>
  );
};

export default Halls;
