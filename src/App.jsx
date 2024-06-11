import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes><Route path="/" element={<Home />} /></Routes>
      <Footer />
    </Router>
  );
}

export default App;
