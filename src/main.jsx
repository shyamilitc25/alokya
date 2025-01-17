import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import App from "./App.jsx";
import Header from "./header";
import KnowMore from "./Knowmore";
import PortFolio from "./Portfolio";
import AdminRoutes from "./admin/AdminRoutes";
// import { SupabaseProvider } from "./SupabaseContext";

createRoot(document.getElementById("root")).render(
  // <SupabaseProvider>
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/knowmore" element={<KnowMore />} />
        <Route path="/massage_buchen" element={<PortFolio />} />
        <Route path="/admin/*" element={<AdminRoutes />} />{" "}
        {/* Use AdminRoutes here */}
      </Routes>
    </Router>
    ;
  </StrictMode>
  // </SupabaseProvider>
);
