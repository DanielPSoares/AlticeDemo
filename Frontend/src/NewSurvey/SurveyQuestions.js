import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export class SurveyQuestions extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Row>
                    <Col lg={4}>
                        <Form.Group controlId="Nickname">
                            <Form.Label>Your Nickname</Form.Label>
                            <Form.Control type="text" name="Nickname"
                                placeholder="Nickname" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group controlId="CatsVsDogs">
                            <Form.Label>Cats or Dogs?</Form.Label>
                            <Form.Control as="select" name="CatsVsDogs">
                                <option value=""></option>
                                <option value="Cats">Cats</option>
                                <option value="Dogs">Dogs</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group controlId="Chocolate">
                            <Form.Label>Chocolate?</Form.Label>
                            <Form.Check type="checkbox" label="Yes please!" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col lg={4}>
                        <Form.Group controlId="Fish">
                            <Form.Label>New Word for Fish</Form.Label>
                            <Form.Control type="text" name="Fish"
                                placeholder="Moof" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group controlId="Color">
                            <Form.Label>Favourite Color</Form.Label>
                            <Form.Control as="select" name="Color">
                                <option value="Purple">Purple</option>
                                <option value="Dark Purple">Dark Purple</option>
                                <option value="Neon Purple">Neon Purple</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group controlId="Cookie">
                            <Form.Label>Cookie?</Form.Label>
                            <Form.Check type="checkbox" label="Definitely!" />
                        </Form.Group>
                    </Col>
                </Row>
            </div>
        )
    }

}