import React from "react";
import Navigacija from "./Navigacija";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Skills = () => {
    return (
        <Container fluid className="w-100 h-100 d-flex flex-column p-0">
            <Navigacija />
            <Container fluid className="bg-dark text-white h-100 p-5">
                <Row>
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <div className="border border-warning p-3 rounded-3">
                            <h3>Javascript, HTML, CSS (Styled Components, Bootstrap)</h3>
                            <p>Skilled in HTML, JavaScript, and CSS to build responsive, dynamic, and user-friendly web applications with a focus on clean code and modern design principles.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <div className="border border-warning p-3 rounded-3">
                            <h3>React</h3>
                            <p>Experienced in building dynamic and interactive user interfaces with React, utilizing component-based architecture and state management to create scalable web applications.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <div className="border border-warning p-3 rounded-3">
                            <h3>PHP</h3>
                            <p>Proficient in PHP for developing dynamic web applications, handling server-side logic, and integrating databases to create efficient and scalable backend systems.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <div className="border border-warning p-3 rounded-3">
                            <h3>JAVA</h3>
                            <p>Experienced in Java for building robust, scalable backend systems and developing applications with a focus on object-oriented programming.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <div className="border border-warning p-3 rounded-3">
                            <h3>MySQL</h3>
                            <p>Skilled in MySQL for designing, managing, and optimizing relational databases, ensuring data integrity, and performing complex queries to support backend applications.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Skills;
