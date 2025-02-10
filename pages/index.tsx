import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import About from "@/components/about_section/About";
import Footer from "@/components/main_layout/Footer";
import Hero from "@/components/hero_section/Hero";
import MobileNav from "@/components/main_layout/MobileNav";
import Nav from "@/components/main_layout/Nav";
import Projects from "@/components/projects_section/Projects";
import Services from "@/components/Services";
import ExperienceSection from "@/components/experience_section/ExperienceSection";
import EmailSection from "@/components/EmailSection";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav((prevState) => !prevState);
  const closeNav = () => setNav(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        offset: 120,
        delay: 0,
        duration: 400,
        easing: "ease",
        once: true,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    }
  }, []);


  return (
    <div className="overflow-x-hidden">
      {nav && <MobileNav nav={nav} closeNav={closeNav} />}
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

export const getServerSideProps = async ({ req, locale }: { req: any; locale: string }) => {
  const acceptLanguage = req.headers["accept-language"];
  const detectedLanguage = acceptLanguage?.includes("pt-BR") ? "pt-BR" : "en";

  return {
    props: {
      ...(await serverSideTranslations(detectedLanguage, ["translation"])),
      detectedLanguage,
    },
  };
};


export default HomePage;
