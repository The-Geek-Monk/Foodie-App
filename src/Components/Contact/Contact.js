import React from "react";
import "./Contact.css";
import burgerImage from "../../asset/contact.jpg";

export const Contact = () => {
  return (
    <div className="about-container">
      <div className="burger-img">
        <img src={burgerImage} alt="Burger" height={250} />
      </div>
      <div className="form-section">
        <h1>Contact us</h1>
        <form>
          <div className="input-text">
            <input placeholder="Name" />
          </div>
          <div className="input-text">
            <input placeholder="Email" />
          </div>
          <div className="input-text">
            <input placeholder="Type your Message here..." />
          </div>
          <div className="input-button">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
