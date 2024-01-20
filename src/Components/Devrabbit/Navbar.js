import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.svg';


function NaviBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container>
        <div className='Navbar.Brand'>
            <img src={logo} alt="Logo" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Services" className='fontReadex' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Salesforce Consulting
            </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Integeration Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">IoT Solutions and Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Staffing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Service Now
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Business Assurance Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Digital Consulting Services
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Industries" className='fontReadex' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Real Estate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                BFS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Travel And Hospitality</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Health Care
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Education
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Technology" className='fontReadex' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mobile Strategy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Frameworks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mobile BI</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                DevOps
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" className='fontReadex' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Case Study</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Solution Guides
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="about" className='fontReadex'>About us</Nav.Link>
            <Nav.Link href="#link" className='fontReadex'>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaviBar;