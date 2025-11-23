import React from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout.jsx";
import StatCard from "../../components/StatCard/StatCard.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx"; // Reusing
import "./SellerDashboard.css"; // Specific seller styles

const SellerDashboard = () => {
  // Mock Data
  const stats = [
    {
      title: "Total Revenue (Mo)",
      value: "$12,450",
      icon: "💰",
      color: "#388E3C",
    },
    { title: "New Customer Orders", value: "45", icon: "🛍️", color: "#FFC107" },
    { title: "Inventory Value", value: "$8,900", icon: "📦", color: "#4FC3F7" },
    { title: "Producers Sourced", value: "7", icon: "🧑‍🌾", color: "#66BB6A" },
  ];

  const mockSourceProducts = [
    {
      id: 101,
      name: "Bulk Organic Apples",
      producer: "Sunrise Farm",
      price: 0.8,
      unit: "KG",
      minOrder: 50,
    },
    {
      id: 102,
      name: "Premium Goat Cheese",
      producer: "Dairy Delight",
      price: 15.0,
      unit: "Unit",
      minOrder: 10,
    },
  ];

  return (
    <DashboardLayout role="Seller">
      <div className="dashboard-header">
        <h1>🏪 Seller Dashboard</h1>
        <button className="btn-primary">View Customer Orders</button>
      </div>

      <section className="stat-cards-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="dashboard-section">
        <h2>Source Fresh Products (From Producers)</h2>
        <div className="product-listing-grid">
          {mockSourceProducts.map((product) => (
            <div key={product.id} className="source-card card-shadow">
              <h3>{product.name}</h3>
              <p>Source: **{product.producer}**</p>
              <p className="price-tag">
                ${product.price.toFixed(2)} / {product.unit}
              </p>
              <p className="small-text">
                Min Order: {product.minOrder} {product.unit} (Wholesale)
              </p>
              <button className="btn-primary btn-small">
                Buy from Producer
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <h2>My Products for Resale</h2>
        <div className="product-listing-grid">
          {/* Using a simplified ProductCard component for display */}
          <ProductCard
            imagePlaceholder="[Avocado]"
            title="Organic Avocados"
            price={2.5}
            isResell={true}
          />
          <ProductCard
            imagePlaceholder="[Honey]"
            title="Local Honey (Jar)"
            price={12.0}
            isResell={true}
          />
          <ProductCard
            imagePlaceholder="[Eggs]"
            title="Free Range Eggs"
            price={4.99}
            isResell={true}
          />
          <div className="add-product-prompt card-shadow text-center">
            <h3>List a New Item</h3>
            <p>Ready to sell to customers?</p>
            <button className="btn-secondary">List Now &rarr;</button>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default SellerDashboard;
