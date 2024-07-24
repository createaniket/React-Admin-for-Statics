import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Eventscard = ({ event }) => {
  const BackEndURL = import.meta.env.VITE_BACKEND_URL;
  return (
    <div>
      {' '}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${BackEndURL}/${event.images[0]}`} />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Eventscard;