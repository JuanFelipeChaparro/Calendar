import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
            <img alt="React Logo" src="/logo192.png" width="30" height="30" className="d-inline-block align-top"/>
            {` React Calendar`}
        </Navbar.Brand>
    </Navbar>
);

export default Header;