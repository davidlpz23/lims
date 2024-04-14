import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">LIMS</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Acerca de</Nav.Link>
                    <Nav.Link href="#">Servicios</Nav.Link>
                    <Nav.Link href="#">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;