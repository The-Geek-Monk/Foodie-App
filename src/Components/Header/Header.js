import React from "react";
import "./Header.css";
import { Link, BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter and Link

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <nav className="center">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="right">
        <button className="login-button">Login</button>
      </div>
    </header>
  );
};

export default Header;
