import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <main className="container about-main">
        <h1>🌱 Our Mission at FarmConnect</h1>

        <section className="about-section card-shadow">
          <h2>Connecting Local Growers to Communities</h2>
          <p>
            Founded on the principle of **transparency and sustainability**,
            FarmConnect was created to bridge the gap between local producers
            and the buyers who cherish fresh, high-quality ingredients. We
            provide a clean, modern marketplace for Producers to sell directly,
            Sellers to source inventory easily, and Buyers to access the best of
            the harvest.
          </p>
          <div className="value-cards">
            <div className="value-card">
              <h3>100% Local</h3>
              <p>We champion local economies.</p>
            </div>
            <div className="value-card">
              <h3>Sustainable</h3>
              <p>Supporting eco-friendly farming.</p>
            </div>
            <div className="value-card">
              <h3>Fair Pricing</h3>
              <p>Ensuring fair profits for farmers.</p>
            </div>
          </div>
        </section>

        <section className="about-section card-shadow team-section">
          <h2>Meet the Team (Placeholder)</h2>
          <p className="text-center">
            A small group of technologists and agricultural enthusiasts building
            a better food system.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
