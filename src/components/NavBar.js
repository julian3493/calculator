import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => (
  <nav className="navbar">
    <div>
      <h1>Math Magicians</h1>
    </div>
    <div className="navigation">
      <Link to="/" className="link">Home </Link>
      <br />
      <Link to="/app" className="link">Calculator </Link>
      <br />
      <Link to="/quote" className="link">Quote</Link>
    </div>
  </nav>
);

export default NavBar;
