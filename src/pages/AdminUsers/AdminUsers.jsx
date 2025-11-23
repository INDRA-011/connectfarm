import React from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout.jsx";
import "./AdminUsers.css"; // Specific Admin Users Styles

const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@farm.com",
    role: "Producer",
    status: "Active",
  },
  {
    id: 2,
    name: "FreshGrocer Inc.",
    email: "fresh@seller.com",
    role: "Seller",
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Smith",
    email: "alice@buyer.com",
    role: "Buyer",
    status: "Active",
  },
  {
    id: 4,
    name: "Green Valley Farm",
    email: "gvf@farm.com",
    role: "Producer",
    status: "Disabled",
  },
];

const AdminUsers = () => {
  return (
    <DashboardLayout role="Admin">
      <div className="dashboard-header">
        <h1>👥 User Management</h1>
      </div>

      <div className="user-table-wrapper card-shadow">
        <table className="minimal-table user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-tag role-${user.role.toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span
                    className={`status-badge status-${user.status.toLowerCase()}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <button className="table-btn edit-btn">Edit Role</button>
                  <button
                    className={`table-btn ${
                      user.status === "Active" ? "disable-btn" : "enable-btn"
                    }`}
                  >
                    {user.status === "Active" ? "Disable" : "Enable"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default AdminUsers;
