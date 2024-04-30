import "./App.css";

import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { Indexpage } from "./pages/Indexpage";
import { Proyectspage } from "./pages/Proyectspage";
import { Aboutpage } from "./pages/Aboutpage";
import { Contactpage } from "./pages/Contactpage";

import Aos from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

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
    <div className={`overflow-hidden`} id="inicio">
      <Toaster />
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollfromtop={scrollfromtop}
      />
      <Indexpage />
      <Aboutpage />
      <Proyectspage />
      <Contactpage />
    </div>
  );
}

export default App;
