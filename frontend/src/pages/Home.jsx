import React from "react";
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import MediaSection from "../components/MediaSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MediaSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
