import React from "react";
import { Link, useLocation } from "react-router-dom";
import iconlogo from "../assets/download.jpg";
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); // Get current path

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
            <Link to="/suggestions" className={location.pathname === "/suggestions" ? "active" : ""}>Suggestions</Link>
          </li>
          <li>
            <Link to="/attendance" className={location.pathname === "/attendance" ? "active" : ""}>Attendance</Link>
          </li>
          <li>
            <Link to="/userprofile" className={location.pathname === "/userprofile" ? "active" : ""}>User Profile</Link>
          </li>
          <li>
            <Link to="/diet" className={location.pathname === "/diet" ? "active" : ""}>Diet</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
