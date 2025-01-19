import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <section
      id="services-section"
      className="bg-gradient-to-b from-gradient-bg-color via-secondary-bg-color to-gradient-bg-color py-16 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-12">
        My <span className="text-primary">Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {/* Front-end Service */}
        <div
          className="rounded-lg bg-card-bg-color shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-border-color"
          data-aos="fade-right"
        >
          <CodeBracketSquareIcon className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-2xl font-semibold text-text text-center mt-4 mb-2">
            Front-end
          </h3>
          <p className="text-secondary-text text-center leading-relaxed">
            I specialize in creating responsive, user-friendly interfaces that
            prioritize accessibility and seamless user experiences.
          </p>
        </div>
        {/* Back-end Service */}
        <div
          className="rounded-lg bg-card-bg-color shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-border-color"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <RocketLaunchIcon className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-2xl font-semibold text-text text-center mt-4 mb-2">
            Back-end
          </h3>
          <p className="text-secondary-text text-center leading-relaxed">
            Building robust server-side solutions with a focus on scalability,
            performance, and security.
          </p>
        </div>
        {/* Full Stack Service */}
        <div
          className="rounded-lg bg-card-bg-color shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-border-color"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <CommandLineIcon className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-2xl font-semibold text-text text-center mt-4 mb-2">
            Full Stack
          </h3>
          <p className="text-secondary-text text-center leading-relaxed">
            Combining front-end and back-end expertise to deliver cohesive,
            end-to-end solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
