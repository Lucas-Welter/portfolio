import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ExperienceSection from "@/components/ExperienceSection";
import EmailSection from "@/components/EmailSection";

const HomePage = () => {
  const [nav, setNav] = useState(false);

  // Toggles the state of the mobile navigation
  const toggleNav = () => setNav((prevState) => !prevState);

  // Closes the mobile navigation
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Mobile Navigation */}
      {nav && <MobileNav nav={nav} closeNav={closeNav} />}

      {/* Navbar */}
      <Nav nav={nav} toggleNav={toggleNav} />

      {/* Page Content */}
      <Hero />
      <div className="relative z-[30]">
        <About />
        <Services />
        <Projects />
        <ExperienceSection />
        <EmailSection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
