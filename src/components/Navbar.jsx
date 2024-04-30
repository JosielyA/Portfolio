import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCodeSlashSharp } from "react-icons/io5";
import { paginas } from "../data/data";

export const Navbar = ({ isOpen, setIsOpen, scrollfromtop }) => {
  return (
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
  );
};
