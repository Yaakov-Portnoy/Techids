import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import Lessons from "./pages/Lessons";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/contact" element={<Contact />} />
        {/* Get Involved and Request a Workshop were folded into the single
            Contact page; these keep old links working. */}
        <Route path="/get-involved" element={<Navigate to="/contact#involved" replace />} />
        <Route path="/request" element={<Navigate to="/contact#workshop" replace />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
