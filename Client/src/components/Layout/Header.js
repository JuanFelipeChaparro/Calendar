import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
            <Link to="/" className="text-center">
                <img alt="React Logo" src="/logo192.png" width="30" height="30" className="d-inline-block align-top"/>
            </Link>
            {` React Calendar`}
        </Navbar.Brand>
    </Navbar>
);

export default Header;