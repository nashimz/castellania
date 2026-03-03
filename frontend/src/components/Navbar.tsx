import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="font-ephesis fixed top-4 left-4 text-4xl sm:text-5xl font-bold text-white z-[60] flex items-center h-14 px-4 ">
        Castellania
      </div>
      <nav className="font-bebas text-xl fixed top-4 left-1/2 -translate-x-1/2 bg-black/10 text-white px-16 py-4 z-50 rounded-3xl shadow-sm min-w-fit">
        <div className="flex items-center justify-center gap-16">
          <div className="flex gap-10">
            <a href="/" className="hover:text-gray-300 transition">
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
