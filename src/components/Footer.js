import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/aaqil-ahamad-1393241ab/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.youtube.com/@aaqilahamad123/videos" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/Aaqil456" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>
              can contact me at through my email at aaqilahamad123@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
