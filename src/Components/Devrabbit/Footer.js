import React from 'react';
import logo from '../../images/logo.svg';

const Footer = () => {
  return (
    <>
    <div className="flex-container">
      <div className="column" id='footerLogoCol'>
      <img src={logo} className='mb-4' alt="Logo" />
        <p className='paraSmaller fontReadex'>DevRabbit IT Solutions Inc.</p>
        <p className='fontReadex'>1180 Iron Point Rd,</p>
        <p className='fontReadex'>Suite 145,</p>
        <p className='fontReadex'>Folsom, CA 95630</p>
        <a href="#" className='linkContact fontReadex'>info@devrabbit.com</a>
        <a href="#" className='linkContact fontReadex'>+1-650-352-8686</a>
        {/* Add more text elements as needed */}
      </div>
      <div className="column footerFont fontReadex">
        <div className='paraSmaller pb-3 mr-2'>Company</div>
        <a href='#' className='link'> <div>About Us</div> </a>
        <a href='#' className='link'> <div>Contact Us</div> </a>
        <a href='#' className='link'> <div>Partnerships</div> </a>
        <a href='#' className='link'> <div>Careers</div> </a>
        <a href='#' className='link'> <div>Employee Referral</div> </a>
        
        {/* Add more text elements as needed */}
      </div>
      <div className="column footerFont fontReadex">
        {/* Add text elements for the third column */}
        <div className='paraSmaller pb-3 mr-2'>Services</div>
        <a href='#' className='link'> <div>Salesforce Consulting </div> </a>
        <a href='#' className='link'> <div>Service Now</div> </a>
        <a href='#' className='link'> <div>Integeration Services</div> </a>
        <a href='#' className='link'> <div>Business Assurance Services</div> </a>
        <a href='#' className='link'> <div>IoT Solutions and Services</div> </a>
        <a href='#' className='link'> <div>Digital Consulting Services</div> </a>
        <a href='#' className='link'> <div>Staffing</div> </a>
      </div>
      <div className="column footerFont fontReadex">
        {/* Add text elements for the fourth column */}
        <div className='paraSmaller pb-3 mr-2'>Industries</div>
        <a href='#' className='link'> <div>Realestate </div> </a>
        <a href='#' className='link'> <div>Health Care</div> </a>
        <a href='#' className='link'> <div>BFS</div> </a>
        <a href='#' className='link'> <div>Education</div> </a>
        <a href='#' className='link'> <div>Travel & Hospitality</div> </a>
      </div>
      <div className="column footerFont fontReadex">
        {/* Add text elements for the fifth column */}
        <div className='paraSmaller pb-3 mr-2'>Technology</div>
        <a href='#' className='link'> <div>Mobile Strategy</div> </a>
        <a href='#' className='link'> <div>Mobile BI</div> </a>
        <a href='#' className='link'> <div>Frameworks</div> </a>
        <a href='#' className='link'> <div>DevOps</div> </a>
      </div>
    </div>
    <div className='copyrightFlex copyrightFont'>
      <div>
      © Copyright 2023 DevRabbit IT Solutions, Inc. All Rights Reserved.
      </div>
      <div>
        <a href='#' className='link'>Privacy policy</a>
      </div>
    </div>
    </>
  );
};

export default Footer;
