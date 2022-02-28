import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { NewSurvey } from './NewSurvey/NewSurvey';

export class ViewCampaignData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filledCampData:
                [
                    // {
                    //     ID: 1,
                    //     FullName: "Daniel T",
                    //     Age: 30,
                    //     Gender: "Male",
                    //     Location: "Tapada das Merces"
                    // },
                    // {
                    //     ID: 2,
                    //     FullName: "Daniel P",
                    //     Age: 36,
                    //     Gender: "Female",
                    //     Location: "Lisboa"
                    // },
                    // {
                    //     ID: 3,
                    //     FullName: "Daniel S",
                    //     Age: 23,
                    //     Location: "Sintra"
                    // }
                ],
            newSurvShow: false
        };
    }

    async updateList() {
        const response = await fetch('api/Survey');
        const data = await response.json();
        this.setState({ filledCampData: data });

    }

    componentDidMount() {
        this.updateList();
    }

    componentDidUpdate() {
        this.updateList();
    }

    async deleteSurv(id) {
        if (window.confirm('Are you sure?')) {
            const response = await fetch('api/Survey/' + id, {
                method: 'DELETE',
                header: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            alert(data);
        }
    }

    render() {
        const { filledCampData } = this.state;
        let newSurvClose = () => this.setState({ newSurvShow: false });

        return (
            <div className="p-5">

                <h1 className="m-3 d-flex justify-content-center">Survey Data</h1>

                <Table className='filled-data' stripend bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Birth Date</th>
                            <th>Gender</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filledCampData.map(camp =>
                            <tr key={camp.ID}>
                                <td>{camp.BasicInfo.FullName}</td>
                                <td>{camp.BasicInfo.BirthDate}</td>
                                <td>{camp.BasicInfo.Gender}</td>
                                <td>{camp.BasicInfo.City}</td>
                                <td>
                                    <Button variant="danger" onClick={() => this.deleteSurv(camp.ID)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={() => this.setState({ newSurvShow: true })}>New Survey</Button>
                </div>

                <NewSurvey show={this.state.newSurvShow} onHide={newSurvClose}></NewSurvey>

            </div>
        )
    }
}