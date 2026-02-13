import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "./Features";
import BooksCatalog from "./BooksCatalog";
import Footer from "./Footer";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeroSection />
      <Features />
      <BooksCatalog />
      <Footer />
    </div>
  );
}
