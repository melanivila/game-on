import {React} from "react";
import {Carousel, Card, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./carousel.css";
import ReactPlayer from "react-player";
import videoProperties from "./carouselData";

function ControlledCarousel() {
  return (
    <>
    <div className="carousel">
    <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
            <div className="video-container">
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={false}
              />
              <Col lg={3} md={11}>              
                <Card className="card-carousel">
                <Card.Body>                
                  <Card.Title as="h4">{videoObj.title}</Card.Title>
                  <Card.Text>{videoObj.description.slice(0,250)}...</Card.Text>
                  <Link to={videoObj.slug} className="link-button">Ver más</Link>
                </Card.Body>
                </Card>
              </Col>

            </div>
            </Carousel.Item>
          );
        })}
      </Carousel>  
    </div>
  </>
  );
}


export default ControlledCarousel;