import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  return (
    <div className="settings-page">
      <Navbar />
      <main className="container settings-main">
        <h1>👤 Profile Settings</h1>

        <div className="settings-grid">
          {/* Nav Links Sidebar */}
          <aside className="settings-sidebar card-shadow">
            <ul>
              <li className="active">Account Info</li>
              <li>Security</li>
              <li>Addresses</li>
              <li>Notifications</li>
              <li>Subscription</li>
            </ul>
          </aside>

          {/* Content Area */}
          <section className="settings-content card-shadow">
            <h2>Account Information</h2>
            <form className="minimal-form profile-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" defaultValue="Jane Farmer" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  defaultValue="jane@farmconnect.com"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" defaultValue="(555) 123-4567" />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  defaultValue="Producer"
                  readOnly
                  className="read-only-field"
                />
              </div>
              <div className="form-group full-width-group">
                <label>Bio/About</label>
                <textarea
                  rows="4"
                  defaultValue="Small, organic farm specializing in seasonal vegetables and herbs."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary update-btn">
                Save Changes
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileSettings;
