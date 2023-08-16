import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav-bar">
    <h1>Math Magicians</h1>
    <ul className="list-item">
      <li className="items">
        <Link to="/">Home</Link>
      </li>
      <div className="seperator" />
      <li className="item">
        <Link to="/Calculator">Calculator</Link>
      </li>
      <div className="seperator" />
      <li className="item">
        <Link to="/Quotes">Quotes</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
