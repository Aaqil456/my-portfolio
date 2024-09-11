import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link,linkDemo }) => {

  return (

    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
      <img src={imgUrl}/>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>

        <br />
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary mt-2">View Project</button>
        </a>

        <br />
        <a href={linkDemo} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary mt-2">View Project Demo</button>
        </a>
      </div>
    </div>
  </Col>

  )
}
