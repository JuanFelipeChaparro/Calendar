import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_EVENTS } from '../../queries';
import ListViewRow from './ListViewRow';
import { Container, Row, Col, ButtonGroup, Button, InputGroup, FormControl, Table } from 'react-bootstrap';

const getCalendarIcon = () => (
    <svg className="bi bi-calendar" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
    </svg>
);

const getListIcon = () => (
    <svg className="bi bi-list-ul" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
    </svg>
);

const getPlusIcon = () => (
    <svg className="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd"/>
    </svg>
);

const ListView = () => {
    const { loading, error, data } = useQuery(GET_EVENTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <Fragment>
            <Container className="mt-4">
                <Row>
                    <Col sm={2}>
                        <h3 className="h3">All Events</h3>
                    </Col>
                    <Col sm={8}>
                        <InputGroup>
                            <FormControl placeholder="Search..." aria-label="Filter" />
                        </InputGroup>
                    </Col>
                    <Col sm={2}>
                        <ButtonGroup aria-label="buttons">
                            <Button variant="primary" disabled>{getListIcon()}</Button>
                            <Button variant="primary">{getCalendarIcon()}</Button>
                            <Button variant="primary">{getPlusIcon()}</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>

            <Table className="mt-5 text-align-center" responsive striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Event Type</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody className="cursor-pointer">
                    {data.getEvents.map(event => (
                        <ListViewRow key={event.id} event={event} />
                    ))}
                </tbody>
            </Table>
        </Fragment>
    );
};

export default ListView;