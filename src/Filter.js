import React from 'react';
import Form from 'react-bootstrap/Form';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={filter.title}
          onChange={(e) => onFilterChange({ ...filter, title: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter rating"
          value={filter.rating}
          onChange={(e) => onFilterChange({ ...filter, rating: e.target.value })}
        />
      </Form.Group>
    </Form>
  );
};

export default Filter;