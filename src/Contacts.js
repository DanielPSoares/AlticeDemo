import React, { Component } from 'react';

export class Contacts extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="p-5">
                <h1 className="m-3 d-flex justify-content-center">Contacts</h1>
                <p>
                    91 622 7074
                </p>
            </div>
        )
    }
}