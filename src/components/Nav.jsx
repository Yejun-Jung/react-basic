import React from 'react';
import htmlIcon from "../assets/sea.png";
import './style/Nav.css';


const Nav = ({ data }) => {
  return (
    <div className="nav-container">

      <div className="top-image">
        <img src={htmlIcon} alt="Main Sea" />
      </div>

      <ul className="tech-list">
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Nav;