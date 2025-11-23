import React from "react";
import "./StatCard.css";

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="stat-card card-shadow">
      <div
        className="stat-icon"
        style={{ backgroundColor: color + "20", color: color }}
      >
        {icon}
      </div>
      <div className="stat-info">
        <div className="stat-value">{value}</div>
        <div className="stat-title">{title}</div>
      </div>
    </div>
  );
};

export default StatCard;
