import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_OWNERS } from '../../queries';
import { Form } from 'react-bootstrap';
import { getOwnerProper } from '../../utils/TextFormatter';

const SelectOwners = ({ onChange }) => {
    const {loading, error, data} = useQuery(GET_OWNERS);

    if (loading) return 'Loading...';
    if (error) return `Error ${error}`;

    return (
        <Form.Group onChange={onChange}>
            <Form.Label>Event Owner</Form.Label>
            <Form.Control as="select" custom name="owner">
                <option value="" hidden>Choose...</option>
                {data.getEnums.sort().map((owner, index) => (
                    <option key={index} value={owner}>{getOwnerProper(owner)}</option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};

export default SelectOwners;