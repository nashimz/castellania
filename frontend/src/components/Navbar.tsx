function Navbar() {
  return (
    <>
      <div className="font-ephesis fixed top-4 left-4 text-5xl font-bold text-white z-50 flex items-center h-14 px-4 ">
        Castellania
      </div>
      <nav className="font-bebas text-xl fixed top-4 left-1/2 -translate-x-1/2 bg-black/10 text-white px-16 py-4 z-50 rounded-3xl shadow-sm min-w-fit">
        <div className="flex items-center justify-center gap-16">
          <div className="flex gap-10">
            <a href="/" className="hover:text-gray-300 transition">
              Inicio
            </a>
            <a href="/biography" className="hover:text-gray-300 transition">
              Biografía
            </a>
            <a href="/works" className="hover:text-gray-300 transition">
              Obras
            </a>
            <a href="/contact" className="hover:text-gray-300 transition">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
