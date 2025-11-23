import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CartItem from "../../components/CartItem/CartItem.jsx";
import "./Cart.css";

const mockCartItems = [
  {
    id: 1,
    name: "Organic Heirloom Tomatoes",
    price: 4.99,
    quantity: 2,
    unit: "LB",
    seller: "Green Acres Farm",
  },
  {
    id: 2,
    name: "Free Range Eggs",
    price: 5.5,
    quantity: 1,
    unit: "Dozen",
    seller: "Dairy Delight",
  },
];

const Cart = () => {
  const subtotal = mockCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10.0;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <Navbar />
      <main className="container cart-main">
        <div className="cart-content-grid">
          <section className="cart-items-list">
            <h1>🛒 Your Shopping Cart</h1>
            {mockCartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            {mockCartItems.length === 0 && (
              <div className="empty-cart card-shadow text-center">
                <p>Your cart is empty. Start browsing fresh produce!</p>
                <a href="/products" className="btn-primary">
                  Browse Products
                </a>
              </div>
            )}
          </section>

          <aside className="cart-summary card-shadow">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Estimated Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Order Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <a
              href="/checkout"
              className="btn-primary btn-full-width checkout-btn"
            >
              Proceed to Checkout
            </a>
            <p className="policy-text">
              Shipping calculated based on producer location.
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
