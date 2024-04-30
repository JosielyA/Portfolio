import { FaCss3Alt, FaGithub, FaReact, FaXTwitter } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiFastapi, SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import curriculum from "../assets/files/Curriculum Josiely Araujo.pdf";
import {
  AiOutlineFacebook,
  AiOutlineFile,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import invermoca from "../assets/images/invermoca.png";
import maxwell from "../assets/images/maxwellparts.png";
import onetv from "../assets/images/onetvform.png";

export const tecnologias = {
  react: {
    nombre: "React",
    icono: <FaReact className="size-6 sm:size-10 xl:size-14" />,
  },
  node: {
    nombre: "Nodejs",
    icono: <FaNodeJs className="size-6 sm:size-10 xl:size-14" />,
  },
  tailwind: {
    nombre: "Tailwind CSS",
    icono: <SiTailwindcss className="size-6 sm:size-10 xl:size-14" />,
  },
  python: {
    nombre: "Python",
    icono: <FaPython className="size-6 sm:size-10 xl:size-14" />,
  },
  fastapi: {
    nombre: "FastApi",
    icono: <SiFastapi className="size-6 sm:size-10 xl:size-14" />,
  },
  css: {
    nombre: "CSS",
    icono: <FaCss3Alt className="size-6 sm:size-10 xl:size-14" />,
  },
  javascript: {
    nombre: "Javascript",
    icono: <IoLogoJavascript className="size-6 sm:size-10 xl:size-14" />,
  },
  typescript: {
    nombre: "Typescript",
    icono: <BiLogoTypescript className="size-6 sm:size-10 xl:size-14" />,
  },
  github: {
    nombre: "Github",
    icono: <FaGithub className="size-6 sm:size-10 xl:size-14" />,
  },
};
export const proyectos = [
  {
    nombre: "Maxwell Parts",
    foto: maxwell,
    link: "https://calm-pastelito-309924.netlify.app/",
    tecnologias: [
      tecnologias.react,
      tecnologias.javascript,
      tecnologias.css,
      tecnologias.node,
    ],
  },
  {
    nombre: "Invermoca",
    foto: invermoca,
    link: "https://invermoca.netlify.app/",
    tecnologias: [
      tecnologias.react,
      tecnologias.javascript,
      tecnologias.css,
      tecnologias.fastapi,
    ],
  },
  {
    nombre: "Formulario OneTvStudio",
    foto: onetv,
    link: "https://onetvstudio.com/",
    tecnologias: [
      tecnologias.react,
      tecnologias.javascript,
      tecnologias.css,
      tecnologias.node,
    ],
  },
];

export const contact = [
  {
    titulo: "josiely.araujo21@gmail.com",
    icon: <AiOutlineMail className="size-7 sm:size-9" />,
    href: "mailto:josiely.araujo21@gmail.com",
  },
  {
    titulo: "linkedin.com/in/josiely-araujo",
    icon: <AiOutlineLinkedin className="size-7 sm:size-9" />,
    href: "https://www.linkedin.com/in/josiely-araujo",
  },
  {
    titulo: "@josiely_dev",
    icon: <AiOutlineInstagram className="size-7 sm:size-9" />,
    href: "https://www.instagram.com/josiely_dev/",
  },
  {
    titulo: "Curriculum Vitae",
    icon: <AiOutlineFile className="size-7 sm:size-9" />,
    href: curriculum,
  },
];
export const contactIcons = [
  {
    icon: <AiOutlineMail className="size-12 md:size-16 lg:size-20" />,
    href: "mailto:josiely.araujo21@gmail.com",
  },
  {
    icon: <AiOutlineLinkedin className="size-12 md:size-16 lg:size-20" />,
    href: "https://www.linkedin.com/in/josiely-araujo",
  },
  {
    icon: <AiOutlineInstagram className="size-12 md:size-16 lg:size-20" />,
    href: "https://www.instagram.com/josiely_dev/",
  },
  {
    icon: <AiOutlineFile className="size-12 md:size-16 lg:size-20" />,
    href: curriculum,
  },
];

export const paginas = [
  { nombre: "Inicio", ruta: "#inicio" },
  { nombre: "Sobre mi", ruta: "#sobremi" },
  { nombre: "Proyectos", ruta: "#proyectos" },
  { nombre: "Contacto", ruta: "#contacto" },
];
