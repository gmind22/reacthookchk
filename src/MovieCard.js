import React from 'react';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <Card style={{ width: '12rem', margin: '10px', padding: '1px'}}>
      <Card.Img variant="top" src={posterURL} alt={title} style={{height: '20em'}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;