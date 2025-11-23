import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <main className="container contact-main">
        <h1>📞 Get in Touch</h1>

        <div className="contact-grid">
          <section className="contact-form-section card-shadow">
            <h2>Send Us a Message</h2>
            <form className="minimal-form contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea
                rows="6"
                placeholder="Your message..."
                required
              ></textarea>
              <button type="submit" className="btn-primary">
                Send Inquiry
              </button>
            </form>
          </section>

          <aside className="contact-info-section card-shadow">
            <h2>Contact Information</h2>
            <div className="info-item">
              <span>📍</span>
              <p>
                FarmConnect HQ
                <br />
                123 Fresh Produce Lane, City, Country
              </p>
            </div>
            <div className="info-item">
              <span>📧</span>
              <p>
                Support: support@farmconnect.com
                <br />
                Sales: sales@farmconnect.com
              </p>
            </div>
            <div className="info-item">
              <span>📞</span>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item business-hours">
              <span>🕒</span>
              <p>Mon - Fri: 9:00 AM to 5:00 PM</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
