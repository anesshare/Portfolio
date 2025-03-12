import React from "react";
import { Container} from "react-bootstrap";
import Navigacija from "./Navigacija";
import "../App.css";

const AboutPage = () => {
  return (
    <div>
      <Container fluid className="w-100 vh-100 d-flex flex-column p-0">
        {/* Navbar */}
            <Navigacija/>
        {/* About Section */}
        <Container fluid className="w-100 bg-dark w-100 d-flex flex-column align-items-center justify-content-center">
          <img id="fotka" src="./full-stack-development.png" className="mb-4" alt="Full Stack Development" />
          <p className="text-white">Socials:
            <a href="https://www.linkedin.com/in/anes-sarukic-712b44171"><img className="soc" src="../linkedin.png"></img></a>
            <a href="https://github.com/anesshare"><img className="soc" src="../github.png"></img></a>
          </p>
          <h1 className="text-white text-center">About Me</h1>
          <p className="text-white text-center w-75">
            I am a passionate Software Developer with a strong background in frontend and full-stack development. My expertise lies in JavaScript, ReactJS, PHP, and Java, allowing me to build dynamic, scalable, and user-friendly web applications.  
            <br /><br />
            I have worked on several full-stack projects, including an email campaign management system and an arena booking platform. These projects required integrating frontend and backend technologies to create efficient, real-time solutions for users.  
            <br /><br />
            Currently, I am pursuing a degree in Business IT at the State University of Novi Pazar, where I continue to expand my technical knowledge. My main interests include backend development with PHP and Java, as well as designing and implementing RESTful APIs.  
            <br /><br />
            Always eager to learn, I have completed courses in full-stack web development with React and participated in IT camps focused on modern JavaScript frameworks. My goal is to further develop my skills in backend engineering while maintaining a strong focus on frontend technologies.
          </p>
        </Container>
      </Container>
    </div>
  );
};

export default AboutPage;
