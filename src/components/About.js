import React from 'react';
import './css/About.css'; // Your CSS file for styling

const About = () => {
  // Function for interactive element
  const handleButtonClick = () => {
    alert('Thanks for exploring [Your App Name]!');
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Welcome to <span className="highlight">Bangol Tech</span></h1>
        <p>
          [Your App Name] is a revolutionary platform dedicated to <span className="highlight">[briefly describe the purpose or main functionality of your app]</span>. 
          We are committed to <span className="highlight">[your mission or goal]</span> and strive to provide 
          <span className="highlight"> [unique selling points or features]</span> to our users.
        </p>

        <h2>Our Mission</h2>
        <p>
          At <span className="highlight">[Your App Name]</span>, our mission is to 
          <span className="highlight"> [clearly state your mission and goals]</span>. 
          We aim to <span className="highlight">[solve a problem, provide value, or meet a specific need]</span> for our users.
        </p>

        <h2>Why Choose <span className="highlight">[Your App Name]</span>?</h2>
        <p>
          - Innovative Solutions: <span className="highlight">[Highlight any innovative features or solutions your app offers.]</span>
        </p>
        <p>
          - User-Friendly Experience: <span className="highlight">[Emphasize the user-friendly design and experience.]</span>
        </p>
        <p>
          - <span className="highlight">[Additional Unique Selling Points]</span>: 
            <span className="highlight">[Mention any other unique aspects or benefits.]</span>
        </p>

        <h2>Meet the Team</h2>
        <p>
          [Introduce your team members, their roles, and a brief description of their expertise.]
        </p>

        <h2>Contact Us</h2>
        <p>
          We love hearing from our users! If you have any questions, feedback, or suggestions, please feel free to 
          <a href="/contact"> contact us</a>.
        </p>

        {/* Interactive element */}
        <button className="explore-button" onClick={handleButtonClick}>Explore [Your App Name]</button>
      </div>
    </div>
  );
};

export default About;
