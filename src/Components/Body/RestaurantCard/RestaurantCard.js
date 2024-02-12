import React from "react";
import "./RestaurantCard.css";
import { IMG_CDN_URL } from "../../Utils/constants";

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="cardi">
      {/* <div className="card-container">
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
      </div> */}
      <figure className="snip1518">
        <div className="image">
          <img src={IMG_CDN_URL + cloudinaryImageId} alt="sample101" />
        </div>
        <figcaption>
          <h5>{name}</h5>
          <h3>{cuisines.join(", ")}</h3>
          <footer>
            <div className="date">{costForTwo ?? "₹200 for two"}</div>
            <div className="icons">
              <div className="views">
                <i className="ion-eye"></i>
                {sla?.lastMileTravelString ?? "2.0 km"}
              </div>
              <div className="love">
                <i className="ion-heart"></i>
                {avgRatingString}
              </div>
            </div>
          </footer>
        </figcaption>
        <a href="#"></a>
      </figure>

      {/* <div className="card">
        <div className="card__image">
          <img src={IMG_CDN_URL + cloudinaryImageId} alt="Salad" />
        </div>
        <div className="card__info">
          <div className="car__info--title">
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
          </div>
          <div className="card__info--price">
            <p>{costForTwo ?? "₹200 for two"}</p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
        </div>
      </div> */}
    </div>
  );
};
