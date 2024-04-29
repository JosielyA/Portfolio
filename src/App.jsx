import "./App.css";
import { paginas, proyectos, tecnologias } from "./data/data";

import { TypeAnimation } from "react-type-animation";

import { IoMdMenu } from "react-icons/io";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa";

import yo from "./assets/images/yo.jpg";

import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollfromtop, setScrollfromtop] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 60) {
      setScrollfromtop(true);
    } else {
      setScrollfromtop(false);
    }
  };
  useEffect(() => {
    Aos.init();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isOpen ? "overflow-hidden" : ""} `} id="inicio">
      <header
        className={`${scrollfromtop ? "h-14" : "h-24"} fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-b from-black from-0% via-black/90 via-80% to-transparent to-100% px-8 text-black transition-all duration-200 md:px-16`}
      >
        <button onClick={() => window.scrollTo(0, 0)}>
          <IoCodeSlashSharp
            className={`${scrollfromtop ? "size-8" : "size-12 md:size-16"}  text-white transition-all duration-200`}
          />
        </button>
        <nav>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden"
          >
            <IoMdMenu className="size-8 text-white" />
          </button>

          <ul
            className={`${isOpen ? "translate-x-0 bg-white text-black" : "translate-x-full text-white"} fixed left-0 right-0 min-h-screen transform space-y-4 p-4 transition duration-300 md:relative md:flex md:min-h-0 md:translate-x-0 md:space-x-6 md:space-y-0 md:bg-transparent md:p-0 md:text-xl`}
          >
            {paginas.map((pagina, i) => (
              <li key={i}>
                <a onClick={() => setIsOpen(false)} href={pagina.ruta}>
                  {pagina.nombre}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="text-white md:px-20 lg:px-60">
        <div className="mt-20 flex flex-col place-content-center items-center gap-4 p-5 md:flex-row md:place-content-between">
          <div className="flex flex-col text-center md:gap-2 md:text-start xl:gap-3">
            <div>
              <h1 className="text-2xl font-bold md:text-4xl xl:mb-2 xl:text-5xl">
                <TypeAnimation
                  sequence={["Portfolio de"]}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  repeat={0}
                />
              </h1>
              <h1 className="text-2xl font-bold md:text-4xl xl:mb-2 xl:text-5xl">
                <TypeAnimation
                  sequence={[1000, "<Josiely Araujo/>"]}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  repeat={0}
                />
              </h1>
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
            <div>
              <button className="invisible absolute rounded-sm bg-white px-3 py-2 text-2xl font-bold italic text-black md:visible md:static">
                Contactame
              </button>
            </div>
          </div>
          <img
            className="size-5/6 rounded-full transition-all hover:scale-105 md:size-auto md:w-4/12"
            src={yo}
            alt="Imagen generada con IA de Josiely Araujo"
          />
        </div>
      </section>
      <section id="experiencia"></section>
      <section className="flex flex-col items-center" id="tecnologias">
        <h2
          data-aos="slide-right"
          className="text-4xl font-bold text-white md:text-6xl"
        >
          Tecnologias
        </h2>
        <ul className="flex flex-wrap place-content-center items-center gap-8 pt-6 text-white">
          {Object.values(tecnologias).map((tech, i) => (
            <li
              data-aos-offset="15"
              data-aos="slide-right"
              className="flex flex-col items-center"
              key={i}
            >
              {tech.icono}
              <h3>{tech.nombre}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section className="text-white" id="proyectos">
        <header
          data-aos="slide-right"
          className="flex place-content-center items-center py-10 lg:px-60"
        >
          <h2 className="text-4xl font-bold lg:text-6xl">
            <TypeAnimation
              sequence={["Proyectos"]}
              wrapper="span"
              cursor={false}
              speed={50}
              repeat={0}
            />
          </h2>
        </header>
        <ul className="flex flex-col items-center gap-8 px-4">
          {proyectos.map((proyecto, i) => (
            <li
              data-aos="slide-right"
              className="flex max-w-[70rem] flex-col shadow-lg shadow-white md:flex-row"
              key={i}
            >
              <img
                className="md:w-1/2"
                src={proyecto.foto}
                alt={`Imagen de ${proyecto.name}`}
              />
              <div className="flex flex-col place-content-between p-4 text-sm md:w-1/2 md:text-lg">
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

      <section id="sobremi"></section>
    </div>
  );
}

export default App;
