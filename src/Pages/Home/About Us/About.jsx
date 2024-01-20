import React from 'react'
import Container from "react-bootstrap/esm/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './About.css'
import Footer from '../../../Components/Devrabbit/Footer'
import TeamSection from '../../../Components/Devrabbit/Team'
import abouthome from '../../../images/about/abouthome.png'
import client1 from '../../../images/client1.svg';
import client2 from '../../../images/client2.svg';
import client3 from '../../../images/client3.svg';
import client4 from '../../../images/client4.svg';
import client5 from '../../../images/client5.svg';
import client6 from '../../../images/client6.svg';
import client7 from '../../../images/client7.svg';
import client8 from '../../../images/client8.png';
import client9 from '../../../images/client9.svg';
import client10 from '../../../images/client10.svg';
import client11 from '../../../images/client11.svg';
import client13 from '../../../images/client13.svg';

const About = () => {
  return (
    <div>
        <div className="blueDiv">
            <Container >
                <Row>
                    <Col sm={6} className="txtContainer">
                        <h1 className="headingHome fontReadex">Transform your business with the help of DevRabbit</h1>
                        <p className="paraHome fontReadex">We are your trusted business IT partner. DevRabbit is a US based Tech consulting firm that provides state-of-the-art solutions to make your business better. Our areas of expertise can be divided into three core areas: Enterprise Mobility, Web Application Development and Cloud Consulting.Our goal is to support our clients and partners reduce their time to market and save application development and support costs.We have great vision, passion to drive our clients’ innovation in agility basis to reach their business goals. With a working model that is centered around Integrity and Transparency, every client engagement is a win – win situation at DevRabbit.</p>
                    </Col>
                    <Col sm={6} className="imgContainer aboutHomeImg">
                        <img src={abouthome} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Col>
                </Row>
            </Container>
        </div>

        {/* client logos */}
        <div className="whiteDiv">
                <h1 className="subHeading">Our Clients</h1>
                <Container>
                    <Row>
                        {/* First Row with 7 images, occupying equal space */}
                        <Col  id="imageRow" md={12} className="d-flex justify-content-between flex-wrap">
                        <img src={client1} alt="" className='logoMargin' />
                        <img src={client2} alt="" className='logoMargin' />
                        <img src={client3} alt="" className='logoMargin' />
                        <img src={client4} alt="" className='logoMargin' />
                        <img src={client5} alt="" className='logoMargin' />
                        <img src={client6} alt="" className='logoMargin' />
                        <img src={client7} alt="" className='logoMargin' />
                        </Col>
                        <br />

                        {/* Second Row with 5 images, centered horizontally */}
                        <Col md={12} className="d-flex justify-content-center flex-wrap">
                        <img src={client8} className="imageMargin logoMargin" alt="" />
                        <img src={client9} className="imageMargin logoMargin" alt="" />
                        <img src={client10} className="imageMargin logoMargin" alt="" />
                        <img src={client11} className="imageMargin logoMargin" alt="" />
                        <img src={client13} className="imageMargin logoMargin" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* track record */}
            <div className='bluDivMini'>
                <h5 className='subHeading' style={{ fontSize: '35px'}}>We’re only just getting started on our journey</h5>
                <Card className='aboutCard'>
                    <Card.Body>
                        <div className='customFlex'>
                            <div className='aboutCardTxt'>
                                <h1 className='aboutCardHead'>20+</h1>
                                <p className='aboutCardPara' >Years of IT Experience</p>
                            </div>
                            <div className='aboutCardTxt'>
                                <h1 className='aboutCardHead'>200+</h1>
                                <p className='aboutCardPara'>Successful Project</p>
                            </div>
                            <div className='aboutCardTxt'>
                                <h1 className='aboutCardHead'>100+</h1>
                                <p className='aboutCardPara'>Fulltime Resource</p>
                            </div>
                            <div className='aboutCardTxt'>
                                <h1 className='aboutCardHead'>50+</h1>
                                <p className='aboutCardPara'>Happy Clients</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            {/* team */}
            <div className='whiteDiv'>
                <h2 id='teamHead'>Meet our team</h2>
                <TeamSection />
            </div>

            {/* contact us */}
            <div className='contactDiv'>
                <h2 className='contactTxt'>Start your Digital Transformation now.</h2>
                <h2 className='contactTxt'>Contact our solution specialists</h2>
                <Button className='contactBtn'><h5>Contact Us</h5></Button>
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>
    </div>
  )
}

export default About;