import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import {ProgramJoinedCard} from "./ProgramJoinedCard";
import {WorkExpCard} from "./WorkExpCard";
import projImg1 from "../assets/img/fyp_project.jpg";
import projImg2 from "../assets/img/react_crud_project.jpg";
import projImg3 from "../assets/img/ai_image_generator_gmbr.jpg";
import projImg4 from "../assets/img/ordering_system_project.jpg";
import projImg5 from "../assets/img/vr_shooter_project.jpg";
import programImg1 from "../assets/img/ar sijil.png";
import programImg2 from "../assets/img/sijil_gdevelop.png";
import programImg3 from "../assets/img/sijil_figma.png";
import programImg4 from "../assets/img/apptizer_ajk_sijil.png";
import programImg5 from "../assets/img/appscelent_trainer_sijil.png";
import programImg6 from "../assets/img/adobe_xd_participant_sijil.png";
import programImg7 from "../assets/img/unity_program_leader_sijil.png";

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
      linkDemo:"https://www.youtube.com/watch?v=0WOC_osNXbg&feature=youtu.be",
    },

    {
      title: "Simple React CRUD App",
      description: "Web App Development",
      imgUrl: projImg2,
      link:"https://github.com/Aaqil456/sample-crud-project-aaqil" ,
      linkDemo:"https://aaqil456.github.io/sample-crud-project-aaqil/",
    },

    {
      title: "AI Image Generator- React",
      description: "Web App Development with Open Ai",
      imgUrl: projImg3,
      link:"https://github.com/Aaqil456/Ai-Image-Generator" ,
      linkDemo:"https://www.youtube.com/watch?v=BrWgG4D68EM",
    },

    {
      title: "Ordering System App",
      description: "Web App Development",
      imgUrl: projImg4,
      link:"https://lrgs.ftsm.ukm.my/users/a182209/myPT3/index.php" ,
      linkDemo:"https://lrgs.ftsm.ukm.my/users/a182209/myPT3/index.php",
    },

    {
      title: "VR Shooter Game- Unity",
      description: "Unity VR Development",
      imgUrl: projImg5,
      link:"https://drive.google.com/drive/folders/1OJGhFofiReCqEg9_qv3pfHkTsWMmKdHf" ,
      linkDemo:"https://www.youtube.com/watch?v=KlfR_KVbeKo",
    },
    
  ];
 
  //program joined mapping
  const programJoined = [
    {
      title: "AR Workshop trainer",
      description: "Guide my peers on how to use AR on Unity",
      imgUrl: programImg1,
    },
    {
      title: "GDevelop Workshop trainer",
      description: "Guide my peers on how to create 2D platformer games using Gdevelop",
      imgUrl: programImg2,
    },
    {
      title: "Figma Workshop Program Leader",
      description: "Lead and manage the entire program from the beginning until the end ",
      imgUrl: programImg3,
    },
    {
      title: "Apptizer program AJK",
      description: "Responsible in handling any technical issues during program ",
      imgUrl: programImg4,
    },
    {
      title: "Appscellent program AJK",
      description: "Guide participant to develop simple mobile app using Mit App Inventor ",
      imgUrl: programImg5,
    },
    {
      title: "Adobe XD Participant",
      description: "Learned the fundemental of UI/UX and Prototyping ",
      imgUrl: programImg6,
    },
    {
      title: "Unity Program Leader",
      description: "Lead and manage the entire program from the beginning until the end ",
      imgUrl: programImg7,
    },
    
  ];

   //work experience mapping
   const workExp = [
    {
      title: " Merchantrade Asia SDN BHD",
      description: "I completed my Internship In Merchantrade Asia SDN BHD starting from October 2023 until April 2024.  Merchantrade Asia is a Money Services Business, Digital Payment Service, Micro-insurance and Mobile Virtual Network operator, based in Malaysia.",
      imgUrl: workExpImg1,
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
