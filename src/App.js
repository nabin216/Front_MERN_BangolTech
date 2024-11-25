import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Services from './components/Services';
import Aboutus from './components/Aboutus';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import Blogs from './components/Blogs';
import { AuthProvider } from './context/AuthContext';
import ProductsUp from './components/ProductsUp';
import ProductShow from './components/ProductShow';
// import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="/ProductsUp" element={<ProductsUp />} />
        <Route path="/ProductShow" element={<ProductShow />} />
           {/* ... other routes */}
        {/* <Route path="/my.html" element={<MyHtmlPage />} /> */}
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* Add routes for other pages as needed */}
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
  );
}

export default App;
