import image1 from "../assets/img/html_logo.svg";
import image2 from "../assets/img/mobile_dev.svg";
import image3 from "../assets/img/figma_logo.svg";
import image4 from "../assets/img/unity_logo.svg";
import image5 from "../assets/img/react_logo.svg";
import image6 from "../assets/img/java_logo.svg";
import image7 from "../assets/img/css_logo.svg";
import image8 from "../assets/img/SQL_logo.svg";
import image9 from "../assets/img/voiceflow_logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skills mainly focused in mobile app development and web development.</p>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={image1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={image2} alt="Image" />
                                <h5>Mobile App Development</h5>
                            </div>
                            <div className="item">
                                <img src={image3} alt="Image" />
                                <h5>Figma System Design</h5>
                            </div>
                            <div className="item">
                                <img src={image4} alt="Image" />
                                <h5>Unity</h5>
                            </div>
                            <div className="item">
                                <img src={image5} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={image6} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={image7} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={image8} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={image9} alt="Image" />
                                <h5>Voiceflow</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
