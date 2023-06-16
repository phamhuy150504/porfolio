import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import basicUI from "../../Assets/Projects/basicUI.png";
import movie from "../../Assets/Projects/movie.png";
import airbnb from "../../Assets/Projects/airbnb.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Cinema"
              description="Web cinema booking ticket build with react.js, TailwindCss, and more... . There are functions such as watching trailers, showtimes, searching, buying tickets ..."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://cv-cinema.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Purchase Phone"
              description="Web booking room ( clone airbnb ). This is basic website allow user booking room, see detail, info .... "
              ghLink="https://gitlab.com/giaovan99/capstone-project-airbnb.git"
              demoLink="https://capstone-project-airbnb.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={basicUI}
              isBlog={false}
              title="Basic UI"
              description="This is basic ui with html, css, bootstrap, Javascript and Library owlCarousel ... . Simulate a modern home page"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://capstone-bootstrap-theta.vercel.app/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
