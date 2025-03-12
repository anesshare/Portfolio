import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../App.css';
import { Container, Button, Carousel, Row, Col } from "react-bootstrap";

// Simulated project data (same as in ProjectsPage.js)
const projects = [
  {
    id: 1,
    title: "Emaily App",
    description:
      "Full-stack web application for sending surveys and collecting feedback from users. Built with React, Redux, Node.js, Express, MongoDB, and Stripe API.",
    images: ["/fotke/emaily1.png", "/fotke/emaily2.png", "/fotke/emaily3.png", "/fotke/emaily4.png", "/fotke/emaily5.png", "/fotke/emaily6.png"],
    route: "Project is not deployed yet"
  },
  {
    id: 2,
    title: "Arena Booking System",
    description:
      "Web application for booking sports arenas and managing reservations. Developed with HTML, CSS, JavaScript, PHP, MySQL.",
    images: ["/fotke/arena1.png", "/fotke/arena2.png", "/fotke/arena3.png", "/fotke/arena4.png", "/fotke/arena5.png"],
    route: "Project is hosted on https://anesarena.x10.mx"
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "Netflix clone built with React, utilizing the TMDB API to fetch movie data and trailers. Deployed on Netlify.",
    images: ["/fotke/netflix1.png", "/fotke/netflix2.png", "/fotke/netflix3.png", "/fotke/netflix4.png", "/fotke/netflix5.png"],
    route: "Project is hosted on https://anesntfx.netlify.app"
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center text-white">Project not found.</p>;
  }

  return (
    <Container fluid className="bg-dark text-white w-100 min-vh-100 p-4">
      <Row className="justify-content-center text-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="mb-3">{project.title}</h2>
          <p className="text-light">{project.description}</p>
        </Col>
      </Row>

      {/* Responsive Grid Layout for Carousel */}
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={10} lg={8}>
          <Carousel className="border border-warning rounded">
            {project.images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 rounded"
                  src={img}
                  alt={`Slide ${index}`}
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8} className="text-center">
          <p className="fw-bold">{project.route}</p>
        </Col>
      </Row>

    
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <Button variant="secondary" onClick={() => navigate("/projects")}>
            Back to Projects
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetails;
