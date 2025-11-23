import React from "react";
import "./RoleSelectionCard.css";

const RoleSelectionCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="role-select-card card-shadow" onClick={onClick}>
      <div className="role-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn-primary btn-select">Select Role</button>
    </div>
  );
};

export default RoleSelectionCard;
