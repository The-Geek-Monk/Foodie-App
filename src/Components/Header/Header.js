import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="center">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="right">
        <button className="login-button">Login</button>
      </div>
    </header>
  );
};
