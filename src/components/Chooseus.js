// chooseus.js

import React from 'react';
import './css/Chooseus.css'; // Import your CSS file for styling
import Logo1 from './images/icon1.png';
import Logo2 from './images/icon2.png';
import Logo3 from './images/icon3.png';
import Logo4 from './images/icon4.png';



const Chooseus = () => {
    return (
        <div className="choose-us-container">
            <h2 className="choose-us-heading">Why You Should Choose Us</h2>
            <div className="choose-us-content">
                <div className="choose-us-item">
                    <img src={Logo1} alt="Icon1" className="choose-us-icon" />
                    <h3>Expert Team</h3>
                    <p className='choose-us-text'>Our experienced team of professionals is dedicated to delivering top-notch solutions tailored to your needs.</p>
                </div>

                <div className="choose-us-item">
                    <img src={Logo2} alt="Icon1" className="choose-us-icon" />
                    <h3>Innovative Solutions</h3>
                    <p className='choose-us-text'>We pride ourselves on offering cutting-edge and innovative solutions to meet the evolving demands of the digital landscape.</p>
                </div>

                <div className="choose-us-item">
                    <img src={Logo3} alt="Icon1" className="choose-us-icon" />
                    <h3>Client-Centric Approach</h3>
                    <p className='choose-us-text'>Your success is our priority. We adopt a client-centric approach to ensure your satisfaction and business growth.</p>
                </div>
                <div className="choose-us-item">
                    <img src={Logo4} alt="Icon1" className="choose-us-icon" />
                    <h3>Cost-Effective Solutions</h3>
                    <p className='choose-us-text'>Delivering high-quality results without breaking the bank, our cost-effective solutions ensure maximum value for your investment.</p>
                </div>
            </div>
        </div>
    );
};

export default Chooseus;
