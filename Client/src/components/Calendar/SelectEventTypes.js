import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_EVENT_TYPES } from '../../queries';
import { Form } from 'react-bootstrap';

const SelectEventTypes = ({ onChange }) => {
    const {loading, error, data} = useQuery(GET_EVENT_TYPES);

    if (loading) return 'Loading...';
    if (error) return `Error ${error}`;

    return (
        <Form.Group onChange={onChange}>
            <Form.Label>Event Type</Form.Label>
            <Form.Control as="select" custom name="type">
                <option value="" hidden>Choose...</option>
                {data.getEnums.sort().map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};

export default SelectEventTypes;
