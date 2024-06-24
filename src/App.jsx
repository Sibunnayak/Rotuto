import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Home from "./Pages/Home/Home";
import MeetYourEmployee from "./components/MeetEmploye/MeetEmployee";
import AboutUs from "./Pages/AboutUs/AboutUS";
import Pricing from "./Pages/Pricing/pricing";
import UseCases from "./Pages/UseCases/UseCases";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Support from "./Pages/Support/Support";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsandConditions/TermsandConditions";

function App() {
  return (
    <div className="gradient-bg">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
        </Routes>
        <MeetYourEmployee />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
