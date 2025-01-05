import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import App from "./App.jsx";
import Header from "./header";
// import KnowMore from "./KnowMore";
import PortFolio from "./PortFolio";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/knowmore" element={<KnowMore />} /> */}
        <Route path="/portfolio" element={<PortFolio />} />
      </Routes>
    </Router>
    ;
  </StrictMode>
);
