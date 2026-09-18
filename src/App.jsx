import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import Lessons from "./pages/Lessons";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import RequestWorkshop from "./pages/RequestWorkshop";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/request" element={<RequestWorkshop />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
