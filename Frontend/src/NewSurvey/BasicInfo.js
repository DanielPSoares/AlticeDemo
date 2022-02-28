import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export class BasicInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Row>
                    <Col lg={4}>
                        <Form.Group controlId="FullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" name="FullName" required
                                placeholder="Full Name" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group controlId="DateBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" name="DateBirth" required
                                placeholder="Date of Birth" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group controlId="Gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" name="Gender">
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col lg={4}>
                        <Form.Group controlId="City">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" name="City"
                                placeholder="City" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group controlId="PhoneNumber">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" name="Phone"
                                placeholder="Phone Number" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Col>
                </Row>
            </div>
        )
    }

}