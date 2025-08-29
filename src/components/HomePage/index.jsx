import React from "react";

// css
import DynamicCssLoader from "./DynamicCssLoader.jsx";

// Layout Components
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import WantSection from "./WantSection.jsx";
import HighlightsSection from "./HighlightsSection.jsx";
import TestimonialsSection from "./TestimonialsSection.jsx";
import CoursesSection from "./CoursesSection.jsx";
import UpcomingClassesSection from "./UpcomingClassesSection.jsx";
import FAQSection from "./FAQSection.jsx";
import Footer from "./Footer.jsx";

const HomePage = () => {
  return (
    <div id="page" className="hfeed site">
      <DynamicCssLoader />
      <div className="elementor elementor-9699">
        <Header />
        <HeroSection />
        <AboutSection />
        <WantSection />
        <HighlightsSection />
        <TestimonialsSection />
        <CoursesSection />
        <UpcomingClassesSection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
