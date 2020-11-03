import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
    <Link to="/" className="pdngarund">Home</Link>
    <Link to="/about" className="pdngarund">About</Link>
    <Link to="/product" className="pdngarund">Product</Link>
    </div>
  );
}

export default NavBar;