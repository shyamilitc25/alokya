import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard"; // Admin dashboard component
// import Appoinments from "./Appoinments";
import Appoinments from "./Appoinments";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

// import Appointments from "./Appointments"; // Admin appointments component

const AdminRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log({ isAuthenticated });
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      {/* Public Route for Login */}
      <Route
        path="/login"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />

      <Route path="appoinments" element={<Appoinments />} />
      {/* Add more admin-specific routes here */}
    </Routes>
  );
};

export default AdminRoutes;
