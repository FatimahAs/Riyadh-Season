import React from 'react';
import '../Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="footer-links">
          <a href="/">العربية</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <p>{new Date().getFullYear()} &copy; 2024 Riyadh Season. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

