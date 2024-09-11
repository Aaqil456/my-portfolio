import { Col } from "react-bootstrap";
import {Row} from "react-bootstrap";

export const WorkExpCard = ({ title, description, imgUrl,titleOut,descriptionOut }) => {
  return (
    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
      <img src={imgUrl} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  </Col>
    
  )
}
