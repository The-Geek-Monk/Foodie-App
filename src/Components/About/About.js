import React from "react";
import "./About.css";
import burgerImage from "../../asset/food-bowl-1.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="first-text">Give your taste bud</h1>
        <h1 className="first-text">good sensation</h1>
        <div className="second-span">
          <h1 className="second-text">Tasty & Fresh Food</h1>
        </div>
        <h4 className="third-text">
          "Better you will feel if you eat a{" "}
          <span className="foodie-text">Foodie App</span> healthy meal"
        </h4>
      </div>
      <div className="burger-img">
        <img src={burgerImage} alt="Burger" height={550} />
      </div>
    </div>
  );
};

export default About;
