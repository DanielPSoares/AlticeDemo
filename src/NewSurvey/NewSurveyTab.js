import React, { Component } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';

import { BasicInfo } from './BasicInfo';
import { SurveyQuestions } from './SurveyQuestions';

export class NewSurveyTab extends Component {

    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="basic">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="basic">Basic Information</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="survey">Survey Questions</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="basic">
                                <BasicInfo></BasicInfo>
                            </Tab.Pane>
                            <Tab.Pane eventKey="survey">
                                <SurveyQuestions></SurveyQuestions>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}