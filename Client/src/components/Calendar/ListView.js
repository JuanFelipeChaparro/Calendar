import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_EVENTS } from '../../queries';
import ListViewRow from './ListViewRow';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ButtonGroup, Button, InputGroup, FormControl, Table } from 'react-bootstrap';
import { CalendarIcon, ListIcon, PlusIcon } from '../../utils/Icons';

const onClickRow = id => {
    console.log(id);
}

const ListView = () => {
    const { loading, error, data } = useQuery(GET_EVENTS, {
        fetchPolicy: "network-only"
    });

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
                            <Button variant="primary" disabled>{ListIcon()}</Button>
                            <Button variant="primary">{CalendarIcon()}</Button>
                            <Link to="/create/event" className="btn btn-primary">{PlusIcon()}</Link>
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
                        <ListViewRow key={event.id} event={event} onClickRow={onClickRow} />
                    ))}
                </tbody>
            </Table>
        </Fragment>
    );
};

export default ListView;