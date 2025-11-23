import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item-card card-shadow">
      <div className="item-image-placeholder">[Image]</div>
      <div className="item-details">
        <h3>{item.name}</h3>
        <p className="seller-name">Seller: {item.seller}</p>
        <p className="price-unit">
          ${item.price.toFixed(2)} / {item.unit}
        </p>
      </div>

      <div className="item-quantity-control">
        <button className="qty-btn">-</button>
        <input type="number" value={item.quantity} readOnly />
        <button className="qty-btn">+</button>
      </div>

      <div className="item-total-price">
        Total: <span className="final-price">${itemTotal}</span>
      </div>

      <button className="item-remove-btn">🗑️</button>
    </div>
  );
};

export default CartItem;
