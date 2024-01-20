import Accordion from 'react-bootstrap/Accordion';

function Faq({ faqData }) {
  return (
    <Accordion>
      {faqData.map((faqItem, index) => (
        <Accordion.Item  className='faqContent' key={index} eventKey={index.toString()}>
          <Accordion.Header className='faqTitleFont'>{faqItem.title}</Accordion.Header>
          <Accordion.Body className='fontReadex'>
            {faqItem.description}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Faq;
