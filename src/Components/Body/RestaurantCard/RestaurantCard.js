import React from "react";
import "./RestaurantCard.css";
import { IMG_CDN_URL } from "../../Utils/constants";

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card-container">
      <img
        src={IMG_CDN_URL + cloudinaryImageId} // Placeholder image URL
        alt="Restaurant"
      />

      <div className="info-container">
        <span className="restaurant-name">{name}</span>
        <span className="food-categories">{cuisines.join(", ")}</span>
      </div>
      <div className="rating-container">
        <div className="rating">
          <h4
            style={
              avgRatingString < 4
                ? {
                    backgroundColor: "#FF0000",
                    padding: "2px",
                    borderRadius: "5px",
                    color: "black",
                  }
                : avgRatingString >= 4
                ? {
                    backgroundColor: "#00A300",
                    padding: "2px",
                    borderRadius: "5px",
                    color: "black",
                  }
                : { color: "white" }
            }
          >
            {avgRatingString}
          </h4>
        </div>
        <span className="delivery-time">
          {sla?.lastMileTravelString ?? "2.0 km"}
        </span>
        <span className="price-range">{costForTwo ?? "₹200 for two"}</span>
      </div>
    </div>
  );
};
