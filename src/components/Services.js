import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Services.css';
import WebDevelopmentImage from '../webdev.jpg';
import SEOImage from '../seo.jpg';
import DigitalMarketingImage from '../dgm.webp';

const Services = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="services-container">
      <h1>Our Services</h1>

      {/* Web Development Service */}
      <div className="service-item">
        <img src={WebDevelopmentImage} alt="Web Development" className="service-image" />
        <div className="service-details">
          <h2>Web Development</h2>
          <p>
            {showFullContent
              ? "Transform your digital aspirations into reality with our web development services. At our web development company, we take pride in delivering tailor-made solutions that elevate your online presence. Our skilled team of developers is dedicated to creating responsive, visually captivating websites that ensure a seamless user experience across various devices. Whether you need a dynamic e-commerce platform or an interactive corporate website, our comprehensive web development services are designed to drive your business growth. With a commitment to utilizing cutting-edge technologies, we craft robust, scalable, and secure web applications, keeping your business at the forefront of digital innovation. Trust us to blend user-centric design with efficient functionality, empowering your brand to leave a lasting and impactful impression in the ever-evolving digital landscape."
              : "Transform your digital aspirations into reality with our web development services. At our web development company, we take pride in delivering tailor-made solutions that elevate your online presence..."}
          </p>
          <button onClick={toggleContent} className="read-more-button">
            {showFullContent ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* SEO Service */}
      <div className="service-item">
        <img src={SEOImage} alt="SEO" className="service-image" />
        <div className="service-details">
          <h2>SEO (Search Engine Optimization)</h2>
          <p>
            {showFullContent
              ? "Search Engine Optimization (SEO) is a crucial aspect of any online strategy, playing a pivotal role in enhancing a website's visibility and attracting targeted traffic. At our web development company, we understand the significance of SEO in achieving online success. Our SEO services are crafted to optimize your website for search engines, improving its ranking and ensuring it appears prominently in relevant search results. From keyword research and on-page optimization to quality link building and content strategy, we employ a comprehensive approach to boost your website's organic reach. Our team of SEO experts stays abreast of the latest industry trends and search engine algorithms to implement strategies that not only drive traffic but also enhance the overall user experience. Partner with us to unlock the full potential of SEO and propel your business towards sustained online growth and visibility."
              : "Search Engine Optimization (SEO) is a crucial aspect of any online strategy, playing a pivotal role in enhancing a website's visibility..."}
          </p>
          <button onClick={toggleContent} className="read-more-button">
            {showFullContent ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Digital Marketing Service */}
      <div className="service-item">
        <img src={DigitalMarketingImage} alt="Digital Marketing" className="service-image" />
        <div className="service-details">
          <h2>Digital Marketing</h2>
          <p>
            {showFullContent
              ? "Digital marketing is the linchpin of contemporary business success. At our web development company, we specialize in crafting tailored strategies to elevate your brand in the digital realm. From social media and content marketing to email campaigns and SEO, our comprehensive approach targets your audience with precision, driving engagement and conversions. Our data-driven insights ensure effective campaign execution, while staying agile in adapting to evolving trends guarantees your brand's prominence in the digital landscape. Partner with us to amplify your online presence, boost brand visibility, and achieve sustained growth in the dynamic world of digital marketing."
              : "Digital marketing is the linchpin of contemporary business success. At our web development company, we specialize in crafting tailored strategies to elevate your brand..."}
          </p>
          <button onClick={toggleContent} className="read-more-button">
            {showFullContent ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      <div className='more-services'>
        <Link to="/services">
          <button className="explore-button">See more services ..</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
