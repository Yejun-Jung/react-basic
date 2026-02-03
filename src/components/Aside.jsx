import React from 'react';
import './style/Aside.css'

const Aside = ({ menu }) => {
  return (
    <aside className="aside-section">
      <h3>&lt;ASIDE&gt; SECTION</h3>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
             <a href={item.path}>■ {item.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;