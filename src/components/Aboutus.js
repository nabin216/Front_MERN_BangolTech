// Aboutus.js

import React, { useState } from 'react';
import './css/Aboutus.css';
import AboutUsImage from '../marketing.jpeg';

const Aboutus = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <div className={`about-us-container ${isClicked ? 'clicked' : ''}`}>
      <div className={`box ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
        <div className="left-section">
          <h2 className="h11">About Us</h2>
          <p> <h3>Innovation and Technology Excellence:</h3> We embrace the latest technological advancements to ensure that your business remains at the forefront of innovation. Our team of experts is passionate about creating solutions that drive efficiency, enhance productivity, and propel your business towards sustainable growth.
          <h3>Strategic Business Consulting:</h3> Beyond technology, we offer strategic business consulting services to help you navigate the complexities of the modern business landscape. From market analysis to business process optimization, our consultants are equipped to guide you towards informed decision-making and long-term success.
          <h3>Client-Centric Solutions:</h3> Your success is our priority. We take a client-centric approach, working closely with you to understand your challenges, goals, and aspirations. This collaborative process enables us to deliver customized solutions that not only meet but exceed your expectations.
          <h3>Reliability and Trust:</h3> We believe in building enduring relationships with our clients. Our commitment to reliability and trust is reflected in the quality of our services and the transparency of our processes. You can count on Bangolo Tech as a dependable partner on your journey to success.
          <h3>Continuous Improvement:</h3> In the dynamic world of technology, continuous improvement is key. We stay ahead of the curve by consistently upgrading our skills, processes, and methodologies to deliver solutions that are not only current but also future-proof.
          </p>
        </div>
      </div>
    </div>
    {/* <div className={`about-us-container ${isClicked ? 'clicked' : ''}`}>
      <div className={`box ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
        <div className="right-section">
          <div className="about-us-image-container">
            <img src={AboutUsImage} alt="About Us" className="about-us-image" />
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Aboutus;
