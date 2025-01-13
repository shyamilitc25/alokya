import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div className="flex-grow-1 p-3" style={{ backgroundColor: "#f8f9fa" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
