import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import carousel21 from '../../images/carousel2.1.png'
import carousel22 from '../../images/carousel2.2.png'

function UncontrolledExample2() {
  return (
    <Carousel className='carouselContainer'>
      <Carousel.Item className='csrouselContent'>
        <Container >
          <Row>
            <Col className='sm={6}'>
                <h1 className="subHeadingLeft fontReadex">Notifii is Packaging platform for local citizens</h1>
                <a href='#' className='read-more-link readArrow'>
          Read more <span className='arrow'>&rarr;</span>
        </a>
            </Col>
            <Col className='sm={6}'>
              <img src={carousel21} alt="" className='carouselImage' />
            </Col>
            
          </Row>
        </Container>

      </Carousel.Item>
      <Carousel.Item>
      <Container >
          <Row>
            <Col className='sm={6}'>
                <h1 className="subHeadingLeft fontReadex">SuiteAmerica</h1>
                <p className="paraSmaller fontReadex">Suite America provides platinum-level service in Corporate Housing, Short Term Apartments and GSA Contract Housing.</p>
                <a href='#' className='read-more-link readArrow'>
          Read more <span className='arrow'>&rarr;</span>
        </a>
            </Col>
            <Col className='sm={6}'>
                <img src={carousel22} alt="" className='carouselImage' />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample2;