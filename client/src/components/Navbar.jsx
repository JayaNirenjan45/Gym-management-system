import React from "react";
import { Link } from "react-router-dom";
import iconlogo from "../assets/download.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-icon">
          <img src={iconlogo} alt="Home" width={40} className="home-logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/suggestions">Suggestions</Link>
          </li>
          <li>
            <Link to="/attendance">Attendance</Link>
          </li>
          <li>
            <Link to="/userprofile">User Profile</Link>
          </li>
          <li>
            <Link to="/diet">Diet</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
