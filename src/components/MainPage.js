import React from 'react';
import { Button, Container } from 'react-bootstrap';
import '../App.css';
import Typical from 'react-typical';
import Navigacija from './Navigacija';

const MainPage = () => {
    return (
        <>
            <Container fluid className="w-100 vh-100 d-flex flex-column p-0">
                <Navigacija />
                <Container
                    fluid
                    className="d-flex flex-column flex-md-row align-items-center justify-content-center flex-grow-1 p-5 bg-dark text-white"
                >
                    <img
                        src="slika.jpg"
                        alt="Anes Sarukic"
                        className="rounded-circle me-md-5 mb-4 mb-md-0"
                        width="300"
                        height="300"
                    />
                    <div className="text-center text-md-start">
                        <h2>Anes Sarukic</h2>
                        <h4>Software Developer</h4>
                        <Typical
                            loop={Infinity}
                            wrapper="span"
                            steps={[
                                "I am Business IT student at State University of Novi Pazar",
                                3000,
                                "I love building web apps",
                                3000,
                                "Javascript, PHP, Java Enjoyer",
                                3000,
                            ]}
                        />
                    </div>
                    <Button
                        variant="primary"
                        className="position-absolute bottom-0 start-50 translate-middle-x mb-5"
                    >
                        <a href="/AnesCV3.pdf" download className="text-white text-decoration-none">
                            Download CV
                        </a>
                    </Button>
                </Container>
            </Container>
        </>
    );
};

export default MainPage;
