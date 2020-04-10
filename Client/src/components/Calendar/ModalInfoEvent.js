import React from 'react';
import { Modal, Badge, Card } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { GET_EVENT } from '../../queries';
import { getTitleProper } from '../../utils/TextFormatter';
import { getLink } from '../../utils/LinkFormatter';
import { GeoIcon } from '../../utils/Icons';

const ModalInfoEvent = ({ show, id, onHide }) => {
    const {loading, error, data} = useQuery(GET_EVENT, {
        variables: {id}
    });

    if (loading) return 'Loading...';
    if (error) return `Error ${error}`;

    const event = data.getEvent;
    const properLocation = getTitleProper(event.location);
    const duration = Math.round((event.date.endDate - event.date.startDate) / 3.6e+6);
    const startDate = new Date(Number(event.date.startDate));
    const endDate = new Date(Number(event.date.endDate));

    return (
        <Modal centered show={show} onHide={onHide} size="md">
            <Modal.Header closeButton>
                <Modal.Title>
                    <p>{event.title}</p>
                    <a 
                        className="sub-text-modal link-style" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href={getLink(properLocation)}
                    >
                        {GeoIcon()} {properLocation}
                    </a>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card body className="mb-3">
                    <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                    <p>{event.description}</p>
                </Card>

                <Card body className="mb-3">
                    <Card.Subtitle className="mb-2 text-muted">Start Date</Card.Subtitle>
                    <Badge variant="light">{startDate.toDateString()}</Badge>
                    <Badge variant="light">{startDate.toTimeString()}</Badge>
                    <Card.Subtitle className="mb-2 mt-2 text-muted">End Date</Card.Subtitle>
                    <Badge variant="light">{endDate.toDateString()}</Badge>
                    <Badge variant="light">{endDate.toTimeString()}</Badge>
                </Card>

                <Card body>
                    <Card.Subtitle className="mb-2 text-muted">Duration</Card.Subtitle>
                    <Badge variant="info">{`${duration} Hours`}</Badge>
                </Card>
            </Modal.Body>
        </Modal>
    );
};

export default ModalInfoEvent;