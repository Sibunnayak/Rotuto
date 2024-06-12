import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Home from "./Pages/Home/Home";
import MeetYourEmployee from "./components/MeetEmploye/MeetEmployee";
import AboutUs from "./Pages/AboutUs/AboutUS";

function App() {
  return (
    <div className="gradient-bg">
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <MeetYourEmployee />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
