import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="nav-bar">
      <h3 className="nav-logo">LOGO</h3>
      <ul className="nav-list">
        <Link  className="nav-links" to="/">
          <li>Home</li>
        </Link>
        <Link  className="nav-links" to="/Stock">
          <li>Stock</li>
        </Link>
        <Link  className="nav-links" to="/Admin">
          <li>Admin</li>
        </Link>
        <Link  className="nav-links" to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};
