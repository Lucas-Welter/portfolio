import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <section
      id="home-section"
      className="h-[90vh] bg-[url('/images/banner.jpg')] bg-cover bg-center flex items-center justify-center"
    >
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
        {/* Texto da Seção */}
        <div>
          <h1 className="text-[35px] md:text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500">
            HI, I'M <span className="text-yellow-400">LUCAS WELTER!</span>
          </h1>
          <TextEffect />
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Holder of a degree in Software Engineering from the Federal
            University of Mato Grosso do Sul, I am enthusiastic about enhancing
            my skills and expanding my expertise in the field.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-6 items-center justify-center lg:justify-start">
            {/* Botão de Download */}
            <a
              href="https://drive.google.com/file/d/1dvnc1uEnea9lJjmGOOKMrMhzG_iHlVqO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-black font-bold text-lg uppercase rounded-lg flex items-center hover:from-green-500 hover:to-teal-600 transition-all"
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="ml-2 w-6 h-6" />
            </a>
            {/* Botão de Vídeo */}
            <button className="flex items-center space-x-3 group mt-4 sm:mt-0">
              <PlayCircleIcon className="w-12 h-12 text-green-400 group-hover:text-yellow-400 transition-all duration-300" />
              <p className="text-lg font-semibold text-gray-200 group-hover:text-yellow-400">
                Watch The Video
              </p>
            </button>
          </div>
        </div>

        {/* Imagem de Perfil */}
        <div className="relative mx-auto lg:mx-0 flex justify-center items-center">
          <div className="w-80 h-80 bg-gradient-to-r from-green-400 to-teal-500 rounded-full shadow-xl shadow-teal-900 p-1">
            <div className="w-full h-full overflow-hidden rounded-full">
              <Image
                src="/images/u1.jpg"
                alt="Lucas Welter - Software Engineer"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
