import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/1.png";
import projImg2 from "../assets/img/projects/2.png";
import projImg3 from "../assets/img/projects/3.png";
import projImg4 from "../assets/img/projects/4.png";
import projImg5 from "../assets/img/projects/5.png";
import projImg6 from "../assets/img/projects/6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "React Portfolio Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Potography Portfolio Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "E-commerce Application",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Food Ordering Application",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "React Firebase Template",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Full-stack Roadmap",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a recent graduate with a Bachelor's degree in Computer Science, I have acquired a solid foundation in software development methodologies, programming languages, and web development frameworks.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane> 
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
