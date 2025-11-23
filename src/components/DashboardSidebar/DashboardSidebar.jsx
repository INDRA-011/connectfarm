import React from "react";
import "./DashboardSidebar.css";

const getNavItems = (role) => {
  switch (role) {
    case "Producer":
      return [
        { name: "Dashboard", icon: "📊", link: "/producer/dashboard" },
        { name: "Products", icon: "🥕", link: "/producer/products" },
        { name: "Orders", icon: "📦", link: "/producer/orders" },
        { name: "Analytics", icon: "📈", link: "/producer/analytics" },
      ];
    case "Seller":
      return [
        { name: "Dashboard", icon: "📊", link: "/seller/dashboard" },
        { name: "Source Products", icon: "🛒", link: "/seller/source" },
        { name: "My Listings", icon: "🏷️", link: "/seller/listings" },
        { name: "Customer Orders", icon: "🛍️", link: "/seller/orders" },
        { name: "Revenue", icon: "💰", link: "/seller/revenue" },
      ];
    case "Buyer":
      return [
        { name: "Browse", icon: "🔍", link: "/buyer/browse" },
        { name: "Orders", icon: "📦", link: "/buyer/orders" },
        { name: "Cart", icon: "🛒", link: "/buyer/cart" },
        { name: "Favorites", icon: "⭐", link: "/buyer/favorites" },
      ];
    case "Admin":
      return [
        { name: "Admin Dashboard", icon: "⚙️", link: "/admin/dashboard" },
        { name: "Users", icon: "👥", link: "/admin/users" },
        { name: "Products", icon: "📋", link: "/admin/products" },
        { name: "Orders", icon: "🧾", link: "/admin/orders" },
      ];
    default:
      return [];
  }
};

const Sidebar = ({ role }) => {
  const navItems = getNavItems(role);

  // Hardcoded active link for example
  const activeLink = navItems.length > 0 ? navItems[0].link : "#";

  return (
    <div className="sidebar-card card-shadow">
      <div className="sidebar-header">
        Welcome, <span className="role-tag">{role}</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className={item.link === activeLink ? "active" : ""}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <a href="/settings" className="footer-link">
          ⚙️ Settings
        </a>
        <a href="/logout" className="footer-link logout-btn">
          🚪 Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
