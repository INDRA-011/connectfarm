import React from "react";
import Sidebar from "../DashboardSidebar/DashboardSidebar.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import "./DashboardLayout.css";

const DashboardLayout = ({ role, children }) => {
  return (
    <div className="dashboard-app-container">
      <Navbar />{" "}
      {/* Assuming a simplified/different navbar for internal use or just the standard one */}
      <div className="dashboard-main-content container">
        <Sidebar role={role} />
        <main className="dashboard-content-area">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
