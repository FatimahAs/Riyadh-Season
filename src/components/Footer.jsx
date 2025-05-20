import React from 'react';
import '../Footer.css';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()}   Copyright © 2024 RIYADH SEASON. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">العربية</a>
          <a href="#">PRIVACY POLICY </a>
          <a href="#"> TERMS & CONDITIONS</a>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
