import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export class GeneralNavigation extends Component {

    render() {
        return (

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                                Home
                            </NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/contacts">
                                Contacts
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}