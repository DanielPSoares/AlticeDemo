import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col, Table, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

import { NewSurveyTab } from './NewSurveyTab';

export class NewSurvey extends Component {
    constructor(props) {
        super(props);
        this.submitSurvey = this.submitSurvey.bind(this);
    }

    async submitSurvey(event) {
        event.preventDefault();

        let survey = {
            Nickname: event.target.Nickname.value,
            CatsDogs: event.target.CatsVsDogs.value,
            Chocolate: event.target.Chocolate.checked,
            Fish: event.target.Fish.value,
            Color: event.target.Color.value,
            Cookie: event.target.Cookie.checked,
            BasicInfo: {
                FullName: event.target.FullName.value,
                BirthDate: event.target.DateBirth.value,
                Gender: event.target.Gender.value,
                City: event.target.City.value,
                PhoneNumber: event.target.PhoneNumber.value,
                Email: event.target.Email.value
            }
        }

        const response = await fetch('api/Survey/New', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(survey)
        });
        const data = await response.json();
        alert(data);
    }

    render() {

        return (
            <div className='content'>
                <Modal {...this.props} centered size="lg" aria-labelledby="contained-modal-title-vcenter">
                    <ModalHeader closeButton>
                        <ModalTitle id="contained-modal-title-vcenter">
                            Fill in New Survey
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submitSurvey}>
                            <NewSurveyTab></NewSurveyTab>

                            <Form.Group className="mt-5">
                                <div className="d-grid gap-2">
                                    <Button variant="success" type="submit">
                                        Add Survey
                                    </Button>
                                </div>
                            </Form.Group>
                        </Form>

                    </ModalBody>

                    <ModalFooter>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}