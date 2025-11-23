import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const product = {
    title: "Organic Heirloom Tomatoes",
    producer: "Green Acres Farm",
    price: 4.99,
    unit: "LB",
    description:
      "These sun-ripened Heirloom Tomatoes are grown without pesticides on Green Acres Farm. Known for their rich, complex flavor and stunning variety of colors, they are perfect for salads or simply sliced with a pinch of salt. Minimum order quantity is 1 LB for buyers, and 50 LB for sellers.",
    stock: 500,
  };

  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value) || 1);
    setQuantity(value);
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="product-details-page">
      <Navbar />
      <main className="container product-details-main">
        <div className="details-grid">
          {/* Image & Gallery */}
          <div className="details-image-section">
            <div className="main-image-placeholder">
              [Large Product Image of Tomatoes]
            </div>
            <div className="thumbnail-gallery">
              <div className="thumbnail active"></div>
              <div className="thumbnail"></div>
              <div className="thumbnail"></div>
            </div>
          </div>

          {/* Details & Actions */}
          <div className="details-info-section card-shadow">
            <p className="producer-link">
              Sold by: <a href="/producer/1">{product.producer}</a>
            </p>
            <h1>{product.title}</h1>

            <div className="price-tag-large">
              ${product.price.toFixed(2)}{" "}
              <span className="unit-text"> / {product.unit}</span>
            </div>

            <p className="product-description">{product.description}</p>

            <div className="stock-info">
              <span className="stock-label">Availability:</span>
              <span className="stock-status">
                ✅ {product.stock} {product.unit} in Stock
              </span>
            </div>

            <div className="separator"></div>

            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity ({product.unit}):</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>

            <div className="total-summary">
              Total Price: <span className="final-price">${totalPrice}</span>
            </div>

            <div className="action-buttons">
              <button className="btn-primary btn-large">🛒 Add to Cart</button>
              <button className="btn-secondary btn-large btn-buy-now">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews or Related Products Section */}
        <section className="related-section">
          <h2>You Might Also Like</h2>
          {/* Placeholder for ProductCard grid */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
