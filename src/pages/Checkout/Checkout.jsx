import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Checkout.css";

const Checkout = () => {
  // Mock Totals
  const subtotal = 15.48;
  const shipping = 10.0;
  const total = 25.48;

  return (
    <div className="checkout-page">
      <Navbar />
      <main className="container checkout-main">
        <h1>💳 Secure Checkout</h1>
        <div className="checkout-grid">
          {/* 1. Shipping Information */}
          <div className="checkout-section card-shadow">
            <h2>1. Delivery Address</h2>
            <form className="minimal-form address-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Street Address" required />
              <div className="form-group-split">
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="Zip/Postal Code" required />
              </div>
            </form>
          </div>

          {/* 2. Payment Method */}
          <div className="checkout-section card-shadow">
            <h2>2. Payment Method</h2>
            <div className="payment-options">
              <label className="payment-option-card">
                <input
                  type="radio"
                  name="payment"
                  value="stripe"
                  defaultChecked
                />
                <span>💳 Credit/Debit Card (Stripe)</span>
              </label>
              <label className="payment-option-card">
                <input type="radio" name="payment" value="khalti" />
                <span>📱 Khalti</span>
              </label>
              <label className="payment-option-card">
                <input type="radio" name="payment" value="esewa" />
                <span>📱 eSewa</span>
              </label>
            </div>

            <div className="card-details-form">
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="Name on Card" />
              <div className="form-group-split">
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVC" />
              </div>
            </div>
          </div>

          {/* 3. Order Summary & Place Order */}
          <aside className="checkout-summary card-shadow">
            <h2>3. Order Summary</h2>
            <div className="summary-row">
              <span>Items Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Grand Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="btn-primary btn-full-width place-order-btn">
              Place Order (${total.toFixed(2)})
            </button>
            <p className="secure-text">🔒 Your transaction is secure.</p>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
