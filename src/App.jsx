import "./App.css";

import { FaCss3Alt, FaGithub, FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";

import yo from "./assets/images/yo.jpg";
import invermoca from "./assets/images/invermoca.png";
import maxwell from "./assets/images/maxwellparts.png";
import onetv from "./assets/images/onetvform.png";

function App() {
  const tecnologias = {
    react: { nombre: "React", icono: <FaReact /> },
    nodej: { nombre: "Nodejs", icono: <FaNodeJs /> },
    tailwind: { nombre: "Tailwind CSS", icono: <SiTailwindcss /> },
    python: { nombre: "Python", icono: <FaPython /> },
    css: { nombre: "CSS", icono: <FaCss3Alt /> },
    javascript: { nombre: "Javascript", icono: <IoLogoJavascript /> },
    typescript: { nombre: "Typescript", icono: <BiLogoTypescript /> },
    github: { nombre: "Github", icono: <FaGithub /> },
  };
  const proyectos = [
    {
      nombre: "Maxwell Parts",
      foto: maxwell,
      tecnologias: [tecnologias.react, tecnologias.javascript, tecnologias.css],
    },
  ];
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#experiencia">Experiencia</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#tecnologias">Tecnologias</a>
          </li>
          <li>
            <a href="#sobremi">Sobre mi</a>
          </li>
        </ul>
      </nav>
      <section id="inicio">
        <div>
          <h1>Portfolio de Josiely Araujo</h1>
          <p>Ingeniera en Informática.</p>
        </div>
        <img src={yo} alt="Imagen generada con IA de Josiely Araujo" />
      </section>
      <section id="experiencia">
        <ul>
          {proyectos.map((proyecto) => (
            <li>
              <h2>{proyecto.nombre}</h2>
              <h3>Tecnologias utilizadas</h3>
              <ul>
                {proyecto.tecnologias.map((tecnologia) => (
                  <li>
                    {tecnologia.icono}
                    <span>{tecnologia.nombre}</span>
                  </li>
                ))}
              </ul>
              <img src={maxwell} alt="" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
