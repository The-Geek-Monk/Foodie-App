import React from "react";
import "./Search.css";

export const Search = () => {
  return (
    <div className="search-container">
      <input placeholder="Search a restaurant name" className="search-bar" />
      <button className="search-button">Search</button>
    </div>
  );
};
