import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import App from "./App.jsx";
import Header from "./header";
import KnowMore from "./Knowmore";
import PortFolio from "./Portfolio";
import AdminRoutes from "./admin/AdminRoutes";
import { SupabaseProvider } from "./SupabaseContext";
import Massages from "./Massage";
import "font-awesome/css/font-awesome.min.css";
import PrivacyPolicy from "./PrivacyPolicy";
import Impressum from "./Impressum";

createRoot(document.getElementById("root")).render(
  <SupabaseProvider>
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/ayurveda_beratung" element={<KnowMore />} />
          <Route path="/unsere_massagen" element={<Massages />} />
          <Route path="/datenschutzerklärung" element={<PrivacyPolicy />} />
          <Route path="/datenschutzerklärung" element={<PrivacyPolicy />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/admin/*" element={<AdminRoutes />} />{" "}
          {/* Use AdminRoutes here */}
        </Routes>
      </Router>
      ;
    </StrictMode>
  </SupabaseProvider>
);
