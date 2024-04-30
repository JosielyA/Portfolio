import React, { useEffect } from "react";
import { proyectos } from "../data/data";
import { TypeAnimation } from "react-type-animation";
import { FaLink } from "react-icons/fa";

export const Proyectspage = () => {
  return (
    <section className="text-white" id="proyectos">
      <header
        data-aos="slide-right"
        data-aos-offset="0"
        className="flex place-content-center items-center py-10 lg:px-60"
      >
        <h2 className="text-4xl font-bold lg:text-6xl">Proyectos </h2>
      </header>
      <ul className="flex flex-col items-center gap-8 px-4">
        {proyectos.map((proyecto, i) => (
          <li
            data-aos="slide-right"
            data-aos-offset="50"
            className="flex max-w-[70rem] flex-col shadow-lg shadow-white md:flex-row"
            key={i}
          >
            <img
              className="md:w-1/2"
              src={proyecto.foto}
              alt={`Imagen de ${proyecto.name}`}
            />
            <div className="flex flex-col place-content-between p-4 text-sm backdrop-blur-lg md:w-1/2 md:text-lg">
              <div className="">
                <h2 className="text-base font-bold sm:text-2xl">
                  {proyecto.nombre}
                </h2>
                <h3 className="mb-2 font-medium italic sm:text-lg">
                  Tecnologias utilizadas
                </h3>
                <ul className="flex flex-wrap gap-4 sm:gap-8 sm:px-8">
                  {proyecto.tecnologias.map((tecnologia, e) => (
                    <li
                      className="flex flex-col place-content-center items-center"
                      key={e}
                    >
                      {tecnologia.icono}
                      <span>{tecnologia.nombre}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="self-end pt-3">
                <a
                  className="flex items-center gap-1 rounded-sm bg-black px-3 py-2 text-white hover:bg-white hover:text-black md:gap-2 md:px-4 md:py-3 lg:gap-3 lg:px-6 lg:py-4"
                  href={proyecto.link}
                  target="_blank"
                >
                  <FaLink className="size-4 md:size-6 lg:size-8" />
                  <span className="text-base md:text-lg lg:text-2xl">
                    Ver pagina web
                  </span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
