import React, { useState } from "react";
import "./Navbar.css"; // Create a CSS file for styling
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Aman's Pizza</div>
      <div className={`nav-links ${isMobile ? "nav-links-mobile" : ""}`}>
        <a href="#login" onClick={() => setIsMobile(false)}>Login</a>
        <a href="#cart" onClick={() => setIsMobile(false)}>Cart</a>
      </div>
      <div className="nav-toggle" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;