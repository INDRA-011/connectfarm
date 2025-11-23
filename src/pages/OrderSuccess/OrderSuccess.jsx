import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="order-success-page">
      <Navbar />
      <main className="container success-main">
        <div className="success-card card-shadow text-center">
          <div className="success-icon">✅</div>
          <h1>Order Placed Successfully!</h1>
          <p className="order-id-text">Your Order ID: **#FC987654**</p>
          <p>
            Thank you for shopping with FarmConnect. We've sent an email
            confirmation with the details of your purchase. Your fresh produce
            will be delivered soon!
          </p>

          <div className="success-actions">
            <a href="/buyer/orders" className="btn-primary">
              View My Orders
            </a>
            <a href="/products" className="btn-secondary">
              Continue Shopping
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
