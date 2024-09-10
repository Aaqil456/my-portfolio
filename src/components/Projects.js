import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import {ProgramJoinedCard} from "./ProgramJoinedCard";
import {WorkExpCard} from "./WorkExpCard";
import projImg1 from "../assets/img/fyp_project.jpg";
import workExpImg1 from "../assets/img/Intern.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  //project mapping
  const projects = [
    {
      title: "Expense Tracker Mobile App",
      description: "Mobile App Development",
      imgUrl: projImg1,
      link:"https://github.com/Aaqil456/MyBudgetTrack" ,
    },
    
  ];
 
  //program joined mapping
  const programJoined = [
    {
      title: " Tracker Mobile App",
      description: "Mobile App Development",
      imgUrl: projImg1,
     
    },
    
  ];

   //work experience mapping
   const workExp = [
    {
      title: " Business Analyst",
      description: "Merchantrade Asia SDN BHD",
      imgUrl: workExpImg1,
      link:"https://github.com/Aaqil456/MyBudgetTrack" ,
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
                <p>
                  This section is to view my projects , working experience and my contribution during my learning process in university
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Program Joined</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Work Experience</Nav.Link>
                    </Nav.Item>
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
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          programJoined.map((project, index) => {
                            return (
                              <ProgramJoinedCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          workExp.map((project, index) => {
                            return (
                              <WorkExpCard
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
