import React from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout.jsx";
import StatCard from "../../components/StatCard/StatCard.jsx";
import ProductListTable from "../../components/ProductListTable/ProductListTable.jsx"; // Reusing
import "./ProducerDashboard.css"; // Shared dashboard styles

const ProducerDashboard = () => {
  // Mock Data
  const stats = [
    { title: "Total Listings", value: "42", icon: "🥕", color: "#66BB6A" },
    { title: "Pending Orders", value: "18", icon: "📦", color: "#FFB300" },
    { title: "Monthly Revenue", value: "$4,520", icon: "💰", color: "#388E3C" },
    {
      title: "Top Product",
      value: "Organic Carrots",
      icon: "👑",
      color: "#4FC3F7",
    },
  ];

  return (
    <DashboardLayout role="Producer">
      <div className="dashboard-header">
        <h1>🌿 Producer Dashboard</h1>
        <button className="btn-primary">➕ Add New Product</button>
      </div>

      <section className="stat-cards-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="dashboard-section">
        <h2>Listings Overview</h2>
        <ProductListTable />
      </section>

      <section className="dashboard-section">
        <h2>Recent Orders</h2>
        {/* Placeholder for recent orders table */}
        <div className="card-shadow minimal-table-placeholder">
          <p>Table of last 5 customer/seller orders...</p>
        </div>
      </section>

      {/* Add Product Form UI - Example of a section */}
      <section className="dashboard-section">
        <h2>Add New Product</h2>
        <div className="add-product-form-container card-shadow">
          <form className="minimal-form">
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" placeholder="e.g., Roma Tomatoes" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select>
                <option>Vegetables</option>
              </select>
            </div>
            <div className="form-group">
              <label>Price per KG/Unit</label>
              <input type="number" placeholder="2.50" />
            </div>
            <div className="form-group">
              <label>Stock Quantity (KG/Units)</label>
              <input type="number" placeholder="500" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="4"
                placeholder="Brief description of the product and farming method."
              ></textarea>
            </div>
            <div className="form-group">
              <label>Product Image</label>
              <input type="file" />
            </div>
            <button type="submit" className="btn-primary">
              Publish Product
            </button>
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default ProducerDashboard;
