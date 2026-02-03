import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './components/style/App.css';

import htmlIcon from "./assets/html.png";
import cssIcon from "./assets/css.png";
import jsIcon from "./assets/js.png";

function App() {
  const navList = [
    { label: "page 2", path: "/page2" },
    { label: "page 3", path: "/page3" },
    { label: "page 4", path: "/page4" },
    { label: "page 5", path: "/page5" },
    { label: "page 6", path: "/page6" }
  ];

  const asideMenu = [
    { label: "links 1", path: "#" },
    { label: "links 2", path: "#" },
    { label: "links 3", path: "#" },
    { label: "links 4", path: "#" },
    { label: "links 5", path: "#" },
    { label: "links 6", path: "#" }
  ];

  const footerMenu = {
    area: "footer",
    title: "Footer Navigation",
    items: [
      { label: "contact us", path: "/contact" },
      { label: "affiliates", path: "/affiliates" },
      { label: "help", path: "/help" },
      { label: "follow us", path: "/follow" }
    ]
  };

  const techList = [
    { id: 1, title: "HTML", desc: "웹 구조를 만드는 마크업 언어", icon: htmlIcon },
    { id: 2, title: "CSS", desc: "화면을 꾸미는 스타일 언어", icon: cssIcon },
    { id: 3, title: "JavaScript", desc: "웹에 동작을 추가하는 언어", icon: jsIcon },
  ];

  return (
    <div className="app-container">
      <Header menu={navList} />
      <div className="content-wrap">
        <Aside menu={asideMenu} />
        <main className="main-section">
          <h2>&lt;MAIN&gt; SECTION</h2>
          <Nav data={techList} />
        </main>
      </div>
      <Footer menu={footerMenu} />
    </div>
  );
}

export default App;