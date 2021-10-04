import React from "react";

import './header.css'

function Header() {
  return (
    <div className='header-container'>
      <div className='logo'>
        <a className='logo-link' href='#'><h1>Star DB</h1></a>
      </div>
      <nav className='navigation'>
        <ul className='navigation-list'>
          <li className='navigation-item'><a href='#'>People</a></li>
          <li className='navigation-item'><a href='#'>Planets</a></li>
          <li className='navigation-item'><a href='#'>Starships</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;