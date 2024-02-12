import React from "react";
import "./About.css";
import burgerImage from "../../asset/burger.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="first-text">Welcome to</h1>
        <h1 className="first-text">The world of</h1>
        <div className="second-span">
          <h1 className="second-text">Tasty & Fresh Food</h1>
        </div>
        <h4 className="third-text">
          "Better you will feel if you eat a{" "}
          <span className="foodie-text">Foodie App</span> healthy meal"
        </h4>
      </div>
      <div className="burger-img">
        <img src={burgerImage} alt="Burger" height={250} />
      </div>
    </div>
  );
};

export default About;
