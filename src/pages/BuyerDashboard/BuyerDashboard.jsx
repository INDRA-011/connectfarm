import React from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import "./BuyerDashboard.css"; // Specific buyer styles

const BuyerDashboard = () => {
  // Mock Data
  const mockProducts = [
    {
      id: 1,
      name: "Roma Tomatoes",
      price: 3.99,
      image: "[Tomatoes]",
      unit: "LB",
    },
    { id: 2, name: "Fresh Basil", price: 2.5, image: "[Basil]", unit: "Bunch" },
    {
      id: 3,
      name: "Organic Bananas",
      price: 0.79,
      image: "[Bananas]",
      unit: "LB",
    },
    {
      id: 4,
      name: "Farm Eggs (Dozen)",
      price: 5.5,
      image: "[Eggs]",
      unit: "Dozen",
    },
    { id: 5, name: "Local Honey", price: 12.99, image: "[Honey]", unit: "Jar" },
  ];

  return (
    <DashboardLayout role="Buyer">
      <div className="buyer-header">
        <h1>🔍 Browse Fresh Products</h1>
        <p>
          Find the best local produce from nearby **Producers** and trusted
          **Sellers**.
        </p>
      </div>

      <div className="search-filter-area card-shadow">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for tomatoes, eggs, or farm names..."
          />
          <button className="search-icon-btn">🔍</button>
        </div>
        <div className="filter-controls">
          <select className="minimal-select">
            <option>Category: All</option>
            <option>Vegetables</option>
            <option>Fruits</option>
          </select>
          <select className="minimal-select">
            <option>Source: Any</option>
            <option>Producers Only</option>
            <option>Sellers Only</option>
          </select>
          <select className="minimal-select">
            <option>Sort By: Best Match</option>
            <option>Price: Low to High</option>
            <option>Freshness Date</option>
          </select>
        </div>
      </div>

      <section className="product-listing-section">
        <h2 className="section-title">Showing 25 Results</h2>
        <div className="product-listing-grid">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              imagePlaceholder={product.image}
              title={product.name}
              price={product.price}
              unit={product.unit}
            />
          ))}
          {/* Add more placeholders for full grid effect */}
          <div className="product-card-placeholder card-shadow">
            [Placeholder]
          </div>
          <div className="product-card-placeholder card-shadow">
            [Placeholder]
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default BuyerDashboard;
