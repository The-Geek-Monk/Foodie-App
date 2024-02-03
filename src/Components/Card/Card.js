import React from "react";
import "./Card.css";

export const Card = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL
          alt="Restaurant"
        />
      </div>
      <div className="info-container">
        <span className="restaurant-name">Dominos's Pizza</span>
        <span className="food-categories">
          Pizzas, Italian, Pastas, Desserts, Athwa
        </span>
      </div>
      <div className="rating-container">
        <div className="rating">
          <img
            src="https://via.placeholder.com/20" // Placeholder icon for rating
            alt="Rating"
          />
          <span>4.3</span>
        </div>
        <span className="delivery-time">&bull;30-40 mins&bull;</span>
        <span className="price-range">$400</span>
      </div>
    </div>
  );
};
