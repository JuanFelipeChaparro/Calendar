import React, { Component, Fragment } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import SelectOwners from './SelectOwners';
import SelectEventTypes from './SelectEventTypes';
import DatePicker from "react-datepicker";
import { useMutation } from '@apollo/react-hooks';
import { CREATE_EVENT } from '../../mutations';
import "react-datepicker/dist/react-datepicker.css";

let createEvent = null;

const SaveNewEvent = ({ history }) => {
    [createEvent] = useMutation(CREATE_EVENT, {
        onCompleted: () => history.push("/")
    });
    return (
        <Button variant="primary" type="submit">
            Submit
        </Button>
    );
};

class CreateEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validator: false,
            input: {
                title: "",
                description: "",
                owner: "",
                date: {
                    startDate: new Date(),
                    endDate: new Date()
                },
                type: "",
                location: ""
            }
        };
    }

    onChangeInput = evt => {
        const { name, value } = evt.target;
        this.setState({
            input: {
                ...this.state.input,
                [name]: value
            }
        });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        if (evt.currentTarget.checkValidity()) {
            const { input } = this.state;
            createEvent({
                variables: {input}
            });
        } else {
            this.setState({validator: true});
        }
    }

    render() {
        return (
            <Fragment>
                <h1 className="h1 text-center mt-4">General Event Information</h1>
                <div className="d-flex justify-content-center mt-5">
                    <Form className="col-md-6 mb-2" onSubmit={this.handleSubmit} noValidate validated={this.state.validator}>

                        <Form.Group onChange={this.onChangeInput}>
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control required name="title" type="text" placeholder="Title" />
                            <Form.Control.Feedback type="invalid">Please choose a title.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group onChange={this.onChangeInput}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="2" name="description" placeholder="Description" required/>
                        </Form.Group>

                        <SelectOwners onChange={this.onChangeInput}/>

                        <Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Label>Start Date &amp; Time</Form.Label>
                                    <DatePicker 
                                        selected={this.state.input.date.startDate}
                                        onChange={date => (
                                            this.setState({
                                                input: {
                                                    ...this.state.input,
                                                    date: { ...this.state.input.date, startDate: date }
                                                }
                                            })
                                        )}
                                        startDate={this.state.input.date.startDate}
                                        endDate={this.state.input.date.endDate}
                                        showTimeSelect
                                        minDate={new Date()}
                                        inline
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>End Date &amp; Time</Form.Label>
                                    <DatePicker 
                                        selected={this.state.input.date.endDate}
                                        onChange={date => (
                                            this.setState({
                                                input: {
                                                    ...this.state.input,
                                                    date: { ...this.state.input.date, endDate: date }
                                                }
                                            })
                                        )}
                                        startDate={this.state.input.date.startDate}
                                        endDate={this.state.input.date.endDate}
                                        minDate={new Date()}
                                        showTimeSelect
                                        inline
                                    />
                                </Col>
                            </Form.Row>
                            <Form.Text className="text-muted">{`Start Date: ${this.state.input.date.startDate}`}</Form.Text>
                            <Form.Text className="text-muted">{`End Date: ${this.state.input.date.endDate}`}</Form.Text>
                        </Form.Group>

                        <Form.Group onChange={this.onChangeInput}>
                            <Form.Label>Location / Link</Form.Label>
                            <Form.Control required name="location" type="text" placeholder="Location" />
                            <Form.Control.Feedback type="invalid">Please choose a location.</Form.Control.Feedback>
                        </Form.Group>
                        
                        <SelectEventTypes onChange={this.onChangeInput}/>

                        <SaveNewEvent history={this.props.history} />

                    </Form>
                </div>
            </Fragment>
        );
    }    
};

export default CreateEvent;