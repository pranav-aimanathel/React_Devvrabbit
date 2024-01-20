import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import linkedinLogo from '../../images/about/linked.svg';
import TeamMembers from './TeamData';

const TeamSection = () => {
  const teamMembers = TeamMembers;

  return (
    <Container>
      <Row className="justify-content-between" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {teamMembers.map((member) => (
          <Col key={member.id} md={4} className="d-flex flex-column align-items-center mb-4">
            <img src={member.imageSrc} alt={member.name} className="img-fluid mb-2" />
            <h5>{member.name}</h5>
            <p>{member.des}</p>
            <a href={'#'} target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" style={{ width: '30px', marginTop: '5px' }} />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamSection;

