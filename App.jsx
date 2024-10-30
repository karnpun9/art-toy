import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Navbar from "./src/components/Navbar";
import Login from "./src/pages/Login";
import Contact from "./src/pages/Contact";
import Cart from "./src/pages/Cart";
import Footer from "./src/components/Footer";
import DetailModel from "./src/components/DetailModel";
import Register from "./src/pages/Register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail-model" element={<DetailModel />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
