import React from 'react';
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card component
import arrow from '../../images/arrow-right.svg'

const CustomCard = ({ title, description, imageUrl }) => {
  return (
    <Card className='cardBg w-100 flex-fill'>
      {imageUrl && <img src={imageUrl} alt='Logo' className='customLogo' />}
      <Card.Body>
        <div className='cardTitle fontReadex m-3'>{title}</div>
        <p className='fontReadex paraSmaller'>{description}</p>
        {/* Read more link with right arrow */}
        <a href='#' className='read-more-link readArrow'>
          Read more <span className='arrow'>&rarr;</span>
        </a>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;