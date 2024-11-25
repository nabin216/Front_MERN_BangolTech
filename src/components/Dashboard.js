import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import defaultLogo from './images/icon1.png'; // Replace with the path to your default logo image

function Dashboard() {
  const [userName, setUserName] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));

    if (userFromLocalStorage && userFromLocalStorage.username) {
      setUserName(userFromLocalStorage.username);
      setUserPhoto(userFromLocalStorage.photo);
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    // Clear user information from local storage
    localStorage.removeItem('user');
    setIsLoggedIn(false);

    // Redirect to the login page or any other desired location
    navigate('/login');
  };

  return (
    <div className='dashboard'>
      <div>
        <navbar className='nav'>
        <ul className='nav-links'>
        <li><a href="./ProductsUp">productsUP</a></li>
        <li><a href="./ProductShow">ProductShow</a></li>
        <li><a href="./#Services">Services</a></li>
        <li><a href="./Blogs">Blogs</a></li>
        {/* Add more navigation links */}
      </ul>  
        </navbar>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='welcome'>
        <h1>Welcome, {userName}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {isLoggedIn && (
        <div className='profile'>
          <img
            src={userPhoto || defaultLogo} // Use userPhoto if available, otherwise use defaultLogo
            alt="User Profile"
            className="profile-photo"
          />
        </div>
      )}

      {/* Rest of the dashboard content */}
    </div>
  );
}

export default Dashboard;
