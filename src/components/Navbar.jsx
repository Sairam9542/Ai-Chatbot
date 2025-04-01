import React from 'react';
import './Navbar.css';  // Import the CSS file for styles

/*<ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
</ul>*/ 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://png.pngtree.com/png-vector/20230104/ourmid/pngtree-chatbot-customer-service-clipart-element-png-image_6551134.png" alt="Logo" />
      </div>
      <div className="burger" onClick={() => toggleMenu()}>
        <div></div>
        <div></div>
        <div></div>
     </div>
      <button className="cta-button">Get Started</button>
    </nav>
  );
}

function toggleMenu() {
  const nav = document.querySelector('.navbar');
  nav.classList.toggle('active');
}

export default Navbar;
