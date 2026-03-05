import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link to="/" className="font-ephesis fixed top-4 left-4 text-4xl sm:text-5xl font-bold text-white z-[60] flex items-center h-14 px-4 ">
        Castellania
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[60] text-white md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className="w-8 h-6 flex flex-col justify-between">
          <span
            className={`w-full h-1 bg-white transition-all ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`w-full h-1 bg-white transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-1 bg-white transition-all ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Navigation */}
      <nav
        className={`font-bebas text-xl fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center gap-10 text-white z-50 transition-transform duration-300 md:top-4 md:left-1/2 md:-translate-x-1/2 md:w-auto md:h-auto md:bg-black/10 md:flex-row md:px-16 md:py-4 md:rounded-3xl md:shadow-sm md:min-w-fit ${
          isOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <div className="flex flex-col md:flex-row gap-10">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition text-3xl md:text-xl"
            >
              Inicio
            </Link>
            <Link
              to="/biography"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition text-3xl md:text-xl"
            >
              Biografía
            </Link>
            <Link
              to="/works"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition text-3xl md:text-xl"
            >
              Obras
            </Link>
            <Link
              to="/frases"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition text-3xl md:text-xl"
            >
              Frases
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
