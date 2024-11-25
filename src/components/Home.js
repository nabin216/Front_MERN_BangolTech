import React from 'react';
import './css/Home.css';
import Logo from './images/nabin.webp';
import Aboutus from './Aboutus.js';
import Services from './Services.js';
import Chooseus from './Chooseus.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
// import Header from './Header.js';
import AnimatedText from './AnimatedText.js';
import Mailbox from './Mailbox.js';
import Product from './Product.js';
const Home = () => {
  return (
    <div>
    <div className='homepage'>
      <br></br>
      <br></br>
      {/* <img src={Logo} alt="Logo" className="bg-logo-img" /> Logo */}
      <h1>Welcome to <span className="highlight1">Bangol Tech IT Soluition & Business Consultant</span></h1>
      <p>Discover our amazing services and explore what we have to offer!</p>
      <AnimatedText />
      <Mailbox />
      <h2>Quick Links</h2>
      <div className="services">
        <div className="service-box">Web Development</div>
        <div className="service-box1">SEO</div>
        <div className="service-box2">Digital Marketing</div>
        <div className="service-box3">Lead Generation</div>
      </div>
      

    </div>
    
    <div>
    {/* <Header /> */}
    <Product />
      <div id='Aboutus'>
        <Aboutus />
      </div>
      
      <Chooseus />
      <div id='Services'>
      <Services />
      </div>
      <div id='Contact'>
      <Contact />
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default Home;
