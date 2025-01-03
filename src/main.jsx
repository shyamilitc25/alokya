import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";
import Header from "./header";
import KnowMore from "./knowmore";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/knowmore" element={<KnowMore />} />
      </Routes>
    </Router>
    ;
  </StrictMode>
);
