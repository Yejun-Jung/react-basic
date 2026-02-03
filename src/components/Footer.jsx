import React from 'react';
import './style/Footer.css'

const Footer = ({ menu }) => {
  return (
    <footer className="footer-section">
      <div className="footer-nav">
        {menu.items.map((item, index) => (
          <span key={index} className="footer-item">
            <a href={item.path}>{item.label}</a>
            {index < menu.items.length - 1 && <span className="separator"> | </span>}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;