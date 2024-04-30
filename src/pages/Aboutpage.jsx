import React from "react";
import { tecnologias } from "../data/data";

export const Aboutpage = () => {
  return (
    <section
      id="sobremi"
      className="flex min-h-[500px] flex-col items-center gap-5 bg-black/70 px-5 text-white md:flex-row md:place-content-around"
    >
      <section className="flex flex-col items-center md:w-[48%]">
        <h2
          data-aos="slide-right"
          className="text-4xl font-bold text-white md:text-6xl"
        >
          Sobre mi
        </h2>
        <p className="text-pretty py-2 text-justify text-xl sm:px-5">
          ¡Hola! Soy una joven ingeniera en informática graduada en la{" "}
          <a
            className="text text-blue-300 underline"
            href="https://www.urbe.edu/"
            target="_blank"
          >
            Universidad Rafael Belloso Chacín
          </a>{" "}
          apasionada por el desarrollo web fullstack. Con un año de experiencia
          en la industria, he trabajado en{" "}
          <a className="text-blue-300 underline" href="#proyectos">
            proyectos
          </a>{" "}
          desafiantes y creativos que demuestran mi habilidad para crear
          soluciones innovadoras. Estoy emocionada por la oportunidad de seguir
          creciendo y aprendiendo en un nuevo desafío laboral. ¡Explora mi
          portafolio y descubre mi pasión por la tecnología!"
        </p>
      </section>
      <section
        className="flex flex-col items-center md:w-[48%]"
        id="tecnologias"
      >
        <h2
          data-aos="slide-left"
          className="text-4xl font-bold text-white md:text-6xl"
        >
          Tecnologias
        </h2>
        <ul className="flex flex-wrap place-content-center items-center gap-6 pt-4 text-white">
          {Object.values(tecnologias).map((tech, i) => (
            <li
              data-aos-offset="200"
              data-aos="slide-left"
              className="flex flex-col items-center"
              key={i}
            >
              {tech.icono}
              <h3>{tech.nombre}</h3>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
