import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";

const Navigacija = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar bg="dark" data-bs-theme="dark" className="w-100">
                <Nav className="mx-auto p-2">
                    <Navbar.Brand as={Link} to="/">Portfolio</Navbar.Brand>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default Navigacija;
