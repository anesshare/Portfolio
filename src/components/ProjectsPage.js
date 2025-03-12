import React from "react";
import Navigacija from "./Navigacija";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
    const navigation = useNavigate();
  const projects = [
    {
      id: 1,
      title: "Emaily App",
      description:
        "Full-stack web application for sending surveys and collecting feedback from users. Built with React, Redux, Node.js, Express, MongoDB, and Stripe API.",
      image: "/fotke/emaily1.png",
    },
    {
        id: 2,
      title: "Arena Booking System",
      description:
        "Web application for booking sports arenas and managing reservations. Developed with HTML, CSS, JavaScript, PHP, MySQL.",
      image: "/fotke/arena1.png",
    },
    {
        id: 3,
      title: "Netflix Clone",
      description:
        "Netflix clone built with React, utilizing the TMDB API to fetch movie data and trailers. Deployed on Netlify.",
      image: "/fotke/netflix1.png",
    },
  ];

  return (
    <div>
      <Navigacija />
      <Container fluid className="bg-dark text-white w-100 h-100 p-5">
        {/* Responsive Grid Layout */}
        <Row className="g-4 justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-lg bg-dark text-white border border-warning">
                <Card.Img
                  variant="top"
                  src={project.image}
                  className="img-fluid"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text style={{ flexGrow: 1 }}>
                    {project.description}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>navigation(`/project/${project.id}`)}>See more</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsPage;
