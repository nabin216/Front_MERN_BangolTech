// Navbar.js
import React, { useState } from 'react';
import './css/Navbar.css'; // Import your custom CSS file

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo"><a href ='./'>Bangol Tech</a></div>
      <button className="menu-button" onClick={toggleMenu}>
      ≣Menu
      </button>
      <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
        <li><a href="./Dashboard">Home</a></li>
        <li><a href="./#Aboutus">About</a></li>
        <li><a href="./#Services">Services</a></li>
        <li><a href="./Blogs">Blogs</a></li>
        <li><a href="./#Contact">Contact</a></li>
        <li><a href="./Login">Login</a></li>
        <li><a href="./RegisterForm">Register</a></li>
        {/* Add more navigation links */}
      </ul>
    </nav>
  );
};

export default Navbar;
