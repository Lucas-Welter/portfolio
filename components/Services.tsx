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
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-400 mb-12">
        My <span className="text-yellow-400">Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        <div
          className="rounded-lg bg-gray-800 shadow-lg p-8 transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-right"
        >
          <CodeBracketSquareIcon className="w-16 h-16 mx-auto text-purple-400" />
          <h3 className="text-2xl font-semibold text-white text-center mt-4 mb-2">
            Front-end
          </h3>
          <p className="text-gray-400 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sequi sed ducimus ex fuga saepe eligendi voluptatem repellat totam
            doloribus magnam.
          </p>
        </div>
        <div
          className="rounded-lg bg-gray-800 shadow-lg p-8 transform transition-transform duration-300 hover:scale-105"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <RocketLaunchIcon className="w-16 h-16 mx-auto text-orange-400" />
          <h3 className="text-2xl font-semibold text-white text-center mt-4 mb-2">
            Back-end
          </h3>
          <p className="text-gray-400 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sequi sed ducimus ex fuga saepe eligendi voluptatem repellat totam
            doloribus magnam.
          </p>
        </div>
        <div
          className="rounded-lg bg-gray-800 shadow-lg p-8 transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <CommandLineIcon className="w-16 h-16 mx-auto text-blue-400" />
          <h3 className="text-2xl font-semibold text-white text-center mt-4 mb-2">
            Full Stack
          </h3>
          <p className="text-gray-400 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sequi sed ducimus ex fuga saepe eligendi voluptatem repellat totam
            doloribus magnam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
