import React from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout.jsx";
import StatCard from "../../components/StatCard/StatCard.jsx";
import ProductListTable from "../../components/ProductListTable/ProductListTable.jsx"; // Reusing
import "./AdminDashboard.css";

const AdminDashboard = () => {
  // Mock Data
  const stats = [
    { title: "Total Users", value: "7,815", icon: "👥", color: "#4FC3F7" },
    { title: "New Producers (Mo)", value: "18", icon: "🧑‍🌾", color: "#66BB6A" },
    {
      title: "Pending Product Approvals",
      value: "42",
      icon: "📝",
      color: "#FFB300",
    },
    {
      title: "Total Orders (Mo)",
      value: "1,200",
      icon: "📦",
      color: "#388E3C",
    },
  ];

  return (
    <DashboardLayout role="Admin">
      <div className="dashboard-header">
        <h1>⚙️ Admin Overview</h1>
      </div>

      <section className="stat-cards-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="dashboard-section">
        <h2>System Health (Charts Placeholder)</h2>
        <div className="chart-container card-shadow">
          <p className="chart-placeholder">
            [Placeholder: Line Chart for Monthly Revenue]
          </p>
          <p className="chart-placeholder">
            [Placeholder: Bar Chart for User Role Distribution]
          </p>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Pending Approvals</h2>
        <ProductListTable isApprovalView={true} />
        {/* The ProductListTable will show an 'Approve' action button when isApprovalView is true */}
      </section>
    </DashboardLayout>
  );
};

export default AdminDashboard;
