import Card from 'react-bootstrap/Card';
import quote from '../../images/quote.png'

function FlexiCard({txt, name, position}) {
  return (
    <Card className='cardTestimony'>
      <Card.Body>
      <Card.Img variant="top" src={quote} className='quoteLogo' alt="quote" />
        <Card.Text id='cardBorder'className='fontReadex paraSmaller'>
          {txt}
        </Card.Text>
       <h5>{name}</h5>
       <h6>{position}</h6>
      </Card.Body>
    </Card>
  );
}

export default FlexiCard;