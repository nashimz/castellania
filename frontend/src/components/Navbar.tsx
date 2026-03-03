import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="font-ephesis fixed top-4 left-4 text-4xl sm:text-5xl font-bold text-white z-[60] flex items-center h-14 px-4 ">
        Castellania
      </div>
<<<<<<< Updated upstream
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/10 text-white px-16 py-4 z-50 rounded-3xl shadow-sm min-w-fit">
        <div className="flex items-center justify-center gap-16">
          <div className="flex gap-10">
            <a href="/" className="hover:text-gray-300 transition">
=======

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
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition text-3xl md:text-xl"
            >
>>>>>>> Stashed changes
              Inicio
            </a>
            <a
              href="/biography"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition text-3xl md:text-xl"
            >
              Biografía
            </a>
            <a
              href="/works"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition text-3xl md:text-xl"
            >
              Obras
            </a>
            <a
              href="/phrases"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition text-3xl md:text-xl"
            >
              Frases
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
