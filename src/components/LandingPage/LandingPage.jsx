import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import CategoryCard from "../CategoryCard/CategoryCard.jsx";
import HowItWorksStep from "../HowItWorksStep/HowItWorksStep.jsx";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Connecting Fields to Families.</h1>
              <p>
                Fresh, local, and sustainable produce delivered from
                Producers directly to Buyers and Sellers.
              </p>
              <div className="hero-ctas">
                <a href="/signup" className="btn-primary btn-large">
                  Get Started Today
                </a>
                <a href="/products" className="btn-secondary btn-large">
                  Browse Products
                </a>
              </div>
            </div>
            <div className="hero-image">
              {/* Placeholder for a visually stunning, fresh produce image */}
              <div className="image-placeholder">
                
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <div className="container">
            <h2 className="text-center">How FarmConnect Works</h2>
            <p className="text-center subtitle">
              Simple steps to connect the supply chain.
            </p>
            <div className="steps-container">
              <HowItWorksStep
                icon="🌱"
                title="1. Producers List"
                description="Farmers list their fresh harvest, setting wholesale or retail prices."
              />
              <HowItWorksStep
                icon="🤝"
                title="2. Connect & Order"
                description="Sellers and Buyers discover products and place orders directly."
              />
              <HowItWorksStep
                icon="🚚"
                title="3. Freshly Delivered"
                description="Goods are picked up and delivered, ensuring quality and freshness."
              />
            </div>
          </div>
        </section>

        {/* Categories Highlight */}
        <section className="categories-highlight">
          <div className="container">
            <h2 className="text-center">Explore Fresh Categories</h2>
            <div className="category-grid">
              <CategoryCard title="Fruits & Vegetables" icon="🍎" />
              <CategoryCard title="Dairy & Eggs" icon="🥚" />
              <CategoryCard title="Grains & Pulses" icon="🌾" />
              <CategoryCard title="Specialty Goods" icon="🍯" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
