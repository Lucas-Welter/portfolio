import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <section
      id="home-section"
      className="h-[90vh] bg-gradient-to-b from-secondary-bg to-background flex items-center justify-center py-12"
      aria-labelledby="hero-heading"
    >
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9 items-center text-center lg:text-left">
        {/* Section Text */}
        <div>
          <h1
            id="hero-heading"
            className="text-[40px] md:text-[55px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            HI, I'M <span className="text-primary">LUCAS WELTER</span>!
          </h1>
          <TextEffect />
          <p
            className="mt-4 text-[1.2rem] text-secondary-text leading-relaxed md:leading-loose"
            aria-label="Brief introduction"
          >
            Holder of a degree in Software Engineering from the Federal
            University of Mato Grosso do Sul, I am enthusiastic about enhancing
            my skills and expanding my expertise in the field.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-8 items-center justify-center lg:justify-start">
            {/* Download Button */}
            <a
              href="https://drive.google.com/file/d/1dvnc1uEnea9lJjmGOOKMrMhzG_iHlVqO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold text-lg uppercase rounded-lg flex items-center hover:from-green-500 hover:to-teal-600 hover:shadow-lg transition-all duration-500 focus:ring-4 focus:ring-primary"
              aria-label="Download CV"
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="ml-2 w-6 h-6" />
            </a>
            {/* Video Button */}
            <button
              className="flex items-center space-x-3 group mt-6 sm:mt-0 focus:ring-4 focus:ring-primary"
              aria-label="Watch The Video"
            >
              <PlayCircleIcon className="w-12 h-12 text-green-400 group-hover:text-primary transition-all duration-300" />
              <p className="text-lg font-semibold text-secondary group-hover:text-primary">
                Watch The Video
              </p>
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative mx-auto lg:mx-0 flex justify-center items-center">
          <div
            className="w-80 h-80 bg-gradient-to-r from-primary to-tertiary rounded-full shadow-lg p-1 relative"
            aria-hidden="true"
          >
            <div className="w-full h-full overflow-hidden rounded-full">
              <Image
                src="/images/u1.jpg"
                alt="Lucas Welter's profile picture"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
