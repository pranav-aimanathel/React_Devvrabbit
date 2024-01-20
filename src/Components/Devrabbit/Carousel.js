import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import carousel1 from '../../images/carousel1.svg'
import carousel2 from '../../images/carousel2.svg'
import carousel3 from '../../images/carousel3.svg'

function UncontrolledExample() {
  return (
    <Carousel className='carouselContainer'>
      <Carousel.Item className='csrouselContent'>
        <Container >
          <Row>
            <Col className='sm={6}'>
                <h1 className="subHeadingLeft fontReadex">App Cloud Hosting</h1>
                <p className="paraSmaller fontReadex">Cloud for agility, flexibility and scalability and is enabling businesses of all sizes to achieve operational efficiencies and save costs on numerous processes.</p>
                <p className="paraSmaller fontReadex">DevRabbit is committed to delivering tailored, scalable and secure cloud solutions, a one-stop shop for all your cloud computing needs, eliminating the hassle of upgrading or maintaining hardware and software.</p>
            </Col>
            <Col className='sm={6}'>
              <img src={carousel1} alt="" className='carouselImage' />
            </Col>
            
          </Row>
        </Container>

      </Carousel.Item>
      <Carousel.Item>
      <Container >
          <Row>
            <Col className='sm={6}'>
                <h1 className="subHeadingLeft fontReadex">Frameworks</h1>
                <p className="paraSmaller fontReadex">A mobile based application framework is designed to supportthe development of the phone applications that are written to leverage native phone capabilities like geo data or contact list or camera etc., We at DevRabbit believe providing quick developmentturnaround by using these frameworks depending our client business goals and requirements.</p>
                <a href='#' className='read-more-link readArrow'>
          Read more <span className='arrow'>&rarr;</span>
        </a>
            </Col>
            <Col className='sm={6}'>
                <img src={carousel2} alt="" className='carouselImage' />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
          <Row>
            <Col className='sm={6}'>
                <h1 className="subHeadingLeft fontReadex">Mobile Strategy</h1>
                <p className="paraSmaller fontReadex">In partnership with your leadership team, we will develop asolid mobile app development strategy that aligns with yourtechnology and business goals. We create mobile application development solutions that transform your company into a mobile enterprise.</p>
                <a href='#' className='read-more-link readArrow'>
          Read more <span className='arrow'>&rarr;</span>
        </a>
            </Col>
            <Col className='sm={6}'>
                <img src={carousel3} className='carouselImage' alt=""  />
            </Col>
          </Row>
        </Container>

      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;