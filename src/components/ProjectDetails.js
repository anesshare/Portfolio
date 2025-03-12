import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Carousel } from "react-bootstrap";

// Simulated project data (same as in ProjectsPage.js)
const projects = [
  {
    id: 1,
    title: "Emaily App",
    description:
      "Full-stack web application for sending surveys and collecting feedback from users. Built with React, Redux, Node.js, Express, MongoDB, and Stripe API.",
    images: ["/fotke/emaily1.png", "/fotke/emaily2.png", "/fotke/emaily3.png","/fotke/emaily4.png","/fotke/emaily5.png","/fotke/emaily6.png"],
    route:"Project is not deployed yet"

  },
  {
    id: 2,
    title: "Arena Booking System",
    description:
      "Web application for booking sports arenas and managing reservations. Developed with HTML, CSS, JavaScript, PHP, MySQL.",
    images: ["/fotke/arena1.png", "/fotke/arena2.png", "/fotke/arena3.png","/fotke/arena4.png","/fotke/arena5.png"],
    route:"Project is hosted on https://anesarena.x10.mx"

  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "Netflix clone built with React, utilizing the TMDB API to fetch movie data and trailers. Deployed on Netlify.",
    images: ["/fotke/netflix1.png", "/fotke/netflix2.png", "/fotke/netflix3.png","/fotke/netflix4.png","/fotke/netflix5.png"],
    route:"Project is hosted on https://anesntfx.netlify.app"
  },
];

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate();

  // Find project by ID
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center text-white">Project not found.</p>;
  }

  return (
    <Container fluid className="bg-dark text-white w-100 vh-100 p-5 text-center">
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      {/* Carousel to Display Multiple Images */}
      <Carousel className="w-50 mx-auto border border-warning">
        {project.images.map((img, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={img} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <p>{project.route}</p>
      <Button variant="secondary" className="mt-4" onClick={() => navigate("/projects")}>
        Back to Projects
      </Button>
    </Container>
  );
};

export default ProjectDetails;
