import React from 'react';
import './style/Header.css';

const Header = ({ menu }) => {
  return (
    <header className="header-section">
      <h1 className="site-name">Site Name</h1>
      <nav>
        <ul className="nav-list">
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.label}</a>
              {index < menu.length - 1 && <span>|</span>}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;