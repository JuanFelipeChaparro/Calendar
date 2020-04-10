import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_EVENTS } from '../../queries';
import ListViewRow from './ListViewRow';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ButtonGroup, Button, InputGroup, FormControl, Table } from 'react-bootstrap';
import { CalendarIcon, ListIcon, PlusIcon, SearchIcon, ClearIcon } from '../../utils/Icons';
import ModalInfoEvent from './ModalInfoEvent';

const onHandleFilter = (value, history) => {
    (value.length > 0) ? history.push(`/q/${value}`) : history.push("/");
};

const onHandlerClear = history => {
    history.push("/");
};

const ListView = ({ match, history }) => {
    const [show, setShow] = useState(false);
    const [idRow, setIdRow] = useState(null);
    let query = (match.params.query) ? match.params.query : "";

    const { loading, error, data } = useQuery(GET_EVENTS, {
        fetchPolicy: "network-only",
        variables: {query}
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
                            <FormControl 
                                placeholder="Search by Title" 
                                aria-label="Filter" 
                                defaultValue={query}
                                onChange={evt => {query = evt.target.value.trim()}}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary" onClick={() => onHandleFilter(query, history)}>{SearchIcon()}</Button>
                                <Button variant="outline-warning" onClick={() => onHandlerClear(history)}>{ClearIcon()}</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col sm={2}>
                        <ButtonGroup aria-label="buttons">
                            <Button variant="primary" disabled>{ListIcon()}</Button>
                            <Link to="/calendar" className="btn btn-primary">{CalendarIcon()}</Link>
                            <Link to="/create/event" className="btn btn-primary">{PlusIcon()}</Link>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>

            { data.getEvents.length === 0 ? <h3 className="h3 text-align-center mt-5">{`No results for '${query}'`}</h3> : 
                <Table className="mt-5 text-align-center table-hover" responsive variant="light">
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
                            <ListViewRow key={event.id} event={event} setId={setIdRow} showModal={setShow} />
                        ))}
                    </tbody>
                </Table>
            }

            {show ? <ModalInfoEvent id={idRow} show={show} onHide={() => setShow(false)} /> : ''}
        </Fragment>
    );
};

export default ListView;