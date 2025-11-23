import React, { useState } from "react";
import "./Auth.css"; // Shared Auth Styles
import RoleSelectionCard from "../../components/RoleSelectionCard/RoleSelectionCard.jsx";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState(null);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const renderRoleSelection = () => (
    <div className="role-selection-container">
      <h2 className="text-center">Join FarmConnect</h2>
      <p className="text-center">Select your primary role to get started.</p>
      <div className="role-cards-grid">
        <RoleSelectionCard
          icon="🧑‍🌾"
          title="Producer"
          description="A Farmer or Grower selling harvest in bulk or retail."
          onClick={() => handleRoleSelect("Producer")}
        />
        <RoleSelectionCard
          icon="🏪"
          title="Seller"
          description="A Wholesaler, Retailer, or Restaurant buying and reselling."
          onClick={() => handleRoleSelect("Seller")}
        />
        <RoleSelectionCard
          icon="🏠"
          title="Buyer"
          description="A Customer buying fresh produce for personal/household use."
          onClick={() => handleRoleSelect("Buyer")}
        />
      </div>
      <p className="auth-footer-link">
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  );

  const renderFormFields = () => (
    <div className="auth-card card-shadow">
      <h2 className="text-center">Register as a **{role}**</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Name / Business Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe or Fresh Farm Co."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="(123) 456-7890" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Location / Address</label>
          <input
            type="text"
            id="address"
            placeholder="123 Farm Rd, City"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a strong password"
            required
          />
        </div>
        <button type="submit" className="btn-primary btn-full-width">
          Complete Registration
        </button>
      </form>
      <p className="auth-footer-link">
        <span className="back-link" onClick={() => setStep(1)}>
          &larr; Change Role
        </span>
      </p>
    </div>
  );

  return (
    <div className="auth-wrapper">
      {step === 1 ? renderRoleSelection() : renderFormFields()}
    </div>
  );
};

export default Signup;
