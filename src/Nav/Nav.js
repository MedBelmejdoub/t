import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav>
      <img className="nav-logo" src="../logo.png" alt=""/>
      <ul className="nav-list">
        <Link to="/Home">
          <li>Home</li>
        </Link>
        <Link to="/Stock">
          <li>Stock</li>
        </Link>
        <Link to="/Admin">
          <li>Admin</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};
