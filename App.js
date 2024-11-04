// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import AdminLogin from './AdminLogin';
import About from './About';
import ContactUs from './ContactUs';
import ArtisanLoginSignup from './ArtisanLoginSignup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/aboutus" element={<About />} /> {/* Added About Us route */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Artisan" element={<ArtisanLoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
