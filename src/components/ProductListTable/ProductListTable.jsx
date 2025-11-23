import React from "react";
import "./ProductListTable.css";

const mockProducts = [
  { id: 1, name: "Organic Avocados", stock: 150, price: 3.5, status: "Active" },
  { id: 2, name: "Heritage Carrots", stock: 420, price: 1.8, status: "Active" },
  { id: 3, name: "Fresh Basil", stock: 50, price: 5.0, status: "Low Stock" },
  {
    id: 4,
    name: "Heirloom Tomatoes",
    stock: 0,
    price: 4.2,
    status: "Out of Stock",
  },
];

const ProductListTable = () => {
  return (
    <div className="product-table-wrapper card-shadow">
      <table className="minimal-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock (KG/Units)</th>
            <th>Price / Unit ($)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <span
                  className={`status-badge status-${product.status
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {product.status}
                </span>
              </td>
              <td>
                <button className="table-btn edit-btn">Edit</button>
                <button className="table-btn delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListTable;
