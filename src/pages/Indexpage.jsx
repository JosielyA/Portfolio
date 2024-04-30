import React from "react";
import yo from "../assets/images/yo.jpg";
import { TypeAnimation } from "react-type-animation";

export const Indexpage = () => {
  return (
    <section className="flex min-h-screen text-white md:px-10 lg:px-12 ">
      <div className="mt-28 flex w-full flex-col-reverse place-content-center items-center gap-4 sm:mt-20 sm:p-5 lg:flex-row-reverse lg:place-content-between">
        <img
          className="w-10/12 rounded-full transition-all hover:scale-105 md:size-auto lg:w-4/12"
          src={yo}
          alt="Imagen generada con IA de Josiely Araujo"
        />
        <div className="flex flex-col text-center lg:text-start">
          <div>
            <div className="">
              <h1 className="text-4xl font-bold xl:mb-2 xl:text-6xl">
                <TypeAnimation
                  sequence={["Portfolio de"]}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  repeat={0}
                />
              </h1>
              <h1 className="text-4xl font-bold xl:mb-2 xl:text-6xl">
                <TypeAnimation
                  sequence={[1000, "<Josiely Araujo/>"]}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  repeat={0}
                />
              </h1>
            </div>
            <p className="text-lg italic md:text-2xl xl:text-4xl">
              <TypeAnimation
                sequence={[2000, "Ingeniera en Informática."]}
                wrapper="span"
                cursor={false}
                speed={50}
                repeat={1}
              />
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <p className="w-11/12 text-base sm:w-8/12">
              <TypeAnimation
                sequence={[
                  3000,
                  "Especializada en desarrollo web. Descubre mi pasión por la tecnología a través de proyectos innovadores y creativos.",
                ]}
                wrapper="span"
                cursor={false}
                speed={60}
                repeat={1}
              />
            </p>
            <a
              href="#contacto"
              className="rounded-sm bg-white px-3 py-2 text-2xl font-bold italic text-black lg:self-start"
            >
              Contactame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
