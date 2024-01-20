import Container from "react-bootstrap/esm/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "../../Components/Devrabbit/Navbar"
import UncontrolledExample from "../../Components/Devrabbit/Carousel"
import UncontrolledExample2 from "../../Components/Devrabbit/Carousel2"
import Faq from "../../Components/Devrabbit/FAQ"
import faqData from "../../Components/Devrabbit/FaqData"
import Card from "../../Components/Devrabbit/Card"
import FlexiCard from "../../Components/Devrabbit/Card2" 
import Footer from "../../Components/Devrabbit/Footer" 

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Home.css'

import client1 from '../../images/client1.svg';
import client2 from '../../images/client2.svg';
import client3 from '../../images/client3.svg';
import client4 from '../../images/client4.svg';
import client5 from '../../images/client5.svg';
import client6 from '../../images/client6.svg';
import client7 from '../../images/client7.svg';
import client8 from '../../images/client8.png';
import client9 from '../../images/client9.svg';
import client10 from '../../images/client10.svg';
import client11 from '../../images/client11.svg';
import client13 from '../../images/client13.svg';
import arrow from '../../images/arrow-right.svg';
import stats from '../../images/stats.svg';

import cloudsync from '../../images/cloud-sync.png';
import settings from '../../images/settings.svg';
import contacts from '../../images/contact.png';
import umbrella from '../../images/umbrella.png';
import it from '../../images/it.png';
import chip from '../../images/chip.png';
import settingsync from '../../images/settings-sync.svg';


function Home(params) {
    return(
        <div>
            <div className="blueDiv">
                <Container >
                    <Row>
                        <Col sm={12} md={6} className="txtContainer">
                            <h1 className="headingHome fontReadex">Supercharge your Digital Transformation with DevRabbit</h1>
                            <p className="paraHome fontReadex">Unlock the power of Digital Transformation using next generation IT services from DevRabbit Book Demo</p>
                            <button className="btnHome">
                                <div className="btnTxt">Book demo &#x2192;</div>
                            </button>
                        </Col>
                        <Col sm={12} md={6} className="imgContainer">
                            <img src="/images/home-computer.svg" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                        </Col>
                        </Row>
                </Container>

            </div>
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

            <div className="blueDiv">
                <Container >
                    <Row>
                        <Col sm={6} className="imgContainer">
                            <img src={stats} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                        </Col>
                        <Col sm={6} className="txtContainer">
                            <h1 className="subHeading fontReadex" style={{textAlign: 'left'}}>We help accelerate your Business Growth by using mobility</h1>
                            <p className="paraOthers fontReadex">In partnership with your team, we will develop and execute an end to end mobile strategy that will enable you to truly embrace mobility and deliver real business value.</p>
                            <a href='#' className='read-more-link readArrow'>
          Read more <span className='arrow'>&rarr;</span>
        </a>
                            
                        </Col>
                    </Row>
                    <UncontrolledExample /> <br />
                </Container>

            </div>

            <div className="whiteDiv">
                <h1 className="subHeading">Our Services</h1>

                {/* cards */}
                <Container>
                    <Row className="flex-md-row flex-column flex-wrap">
                        <Col md={12} className="d-flex justify-content-between">
                            <Card
                                 title="Salesforce Consulting"
                                 imageUrl={cloudsync}
                                 description="Traditional QA services have proved inadequate in addressing today's business needs."
                                 
                            />
                            <Card
                                 title="ServiceNow"
                                imageUrl={settings}
                                 description="The Internet of Things (IoT) is the network of physical objects with embedded technology accessed through the Internet."
                            />
                            <Card
                                 title="Integration Services"
                                imageUrl={settingsync}
                                 description="According to the United Nations, six of the seven billion people worldwide now have mobile phones."
                            />
                            <Card
                                 title="Business Assurance Services"
                                imageUrl={umbrella}
                                 description="Enterprise marketing software can deliver sign, personalized experiences across channels to increase customer engagement"
                            />
                        </Col>
                        <br />

                        <Col md={12} className="d-flex justify-content-between">
                            <Card
                                 title="IoT Solutions and Services"
                                 imageUrl={it}
                                 description="Our domain expertise includes financial instruments such as Equity, Derivatives, Commodities, Currencies."
                            />
                            <Card
                                 title="Digital Consulting Services"
                                 imageUrl={chip}
                                 description="With increasing digital transformation of businesses, the need to shift processes, activities and strategies"
                            />
                            <Card
                                 title="Staffing"
                                 imageUrl={contacts}
                                 description="Principals and Senior Staff worked directly in service areas"
                            />

                        </Col>
                    </Row>
                </Container>
            </div>
            {/* carousel 2 */}
            <div className="bluDivMini"> <br />
                <UncontrolledExample2 /> <br />
            </div>

            {/* FAQ */}
            <div className="whiteDiv">
                <h1 className="subHeading">Frequently asked questions</h1>
                <p className="paraHome" style={{ textAlign: 'center' }}>Everything you need to know about the product?</p>
                <Container id="faqContainer">
                <Faq faqData={faqData}/>
                </Container>
            </div>

            {/* testimonials */}
            <div className="blueDiv" id="testim">
                <h1 className="subHeading">Testimonials</h1>
                <container>

                <div className="card-container">
                    <div className="testimonyCard">
                    <FlexiCard
                        txt= "Over all I am very satisfied. This was a difficult project and they were easy to work with and seemed like they really wanted to make this work and look good." 
                        name= "Robertdran"
                        position= "CEO"
                    />
                    </div>
                    <div className="testimonyCard">
                    <FlexiCard
                        txt= "It is a wonderful experience working with DevRabbit and I strongly recommend them. I will surely work with their team on my forthcoming projects. Wishing them all the best and hoping that they continue to do this good work always. Cheers!! Akgo" 
                        name= "Akgo"
                        position= "CEO"
                    />
                    </div>
                    <div className="testimonyCard">
                    <FlexiCard
                        txt= "Great to work with. Timely, professional and quality work!" 
                        name= "Maxwellrowe"
                        position= "CEO"
                    />
                    </div>
                    <div className="testimonyCard">
                    <FlexiCard
                        txt= "These guys did tremendous work on our app development. We are very pleased and will definitely use them again!" 
                        name= "Forty35"
                        position= "CEO"
                    />
                    </div>
                    <div className="testimonyCard">
                    <FlexiCard
                        txt= "DevRabbit did a great job in helping me for my website and fix the bugs. Thank you for your hard work." 
                        name= "Instanursing"
                        position= "CEO"
                    />
                    </div>
                    <div className="testimonyCard">
                    <FlexiCard
                        txt= "I am glad I chose DevRabbit to develop my iPad app. I was able to meet with company personnel locally to discuss the project details and get insight into the app development process." 
                        name= "Ssaephan"
                        position= "CEO"
                    />
                    </div>
                </div>    
                </container>
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home;