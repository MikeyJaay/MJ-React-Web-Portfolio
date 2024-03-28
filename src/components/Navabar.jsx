import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
// Hamburger Menu Animation 
const [isNavVisible, setIsNavVisible] = useState(false);

return (
  <nav className="navbar">
    {/* Use span with class for Google Material Icons */}
   
    <div className='nav-links' >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);
}

export default Navbar;
