import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ title, icon }) => {
  return (
    <div className="category-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>View Listings &rarr;</p>
    </div>
  );
};

export default CategoryCard;
