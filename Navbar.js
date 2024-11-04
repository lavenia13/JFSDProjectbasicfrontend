// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">HEIRAVA</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/artisan">Artisan</Link></li>
        <li><Link to="#buyer">Buyer</Link></li>
        <li><Link to="/aboutus">About Us</Link></li> {/* Updated About Us link */}
        <li><Link to="/contactus">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
