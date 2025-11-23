import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  imagePlaceholder,
  title,
  price,
  unit = "KG",
  isResell = false,
}) => {
  return (
    <div className="product-card card-shadow">
      <div className="product-image-area">
        <div className="image-placeholder">{imagePlaceholder}</div>
        {isResell && <span className="resell-badge">For Resale</span>}
      </div>
      <div className="product-details">
        <h4>{title}</h4>
        <div className="price-row">
          <span className="current-price">${price.toFixed(2)}</span>
          <span className="unit-label">/ {unit}</span>
        </div>
        <div className="card-actions">
          <button className="btn-add-cart">🛒 Add</button>
          <button className="btn-detail">View</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
