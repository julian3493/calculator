import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <div>
      <h3>Math Magicians</h3>
    </div>
    <div>
      <Link to="/" className="btn-link">Home </Link>
      <br />
      <Link to="/app" className="btn-link">Calculator </Link>
      <br />
      <Link to="/quote" className="btn-link">Quote</Link>
    </div>
  </nav>
);

export default NavBar;
