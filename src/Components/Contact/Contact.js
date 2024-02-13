import React from "react";
import "./Contact.css";
import burgerImage from "../../asset/contact.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-img">
        <img src={burgerImage} alt="Burger" height={500} />
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
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
