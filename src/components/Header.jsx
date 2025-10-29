import { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos modernos
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Quiénes Somos", path: "/about" },
    { name: "Paquetes", path: "/paquetes" },
    { name: "Galeria", path: "/galeria" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-teal-600">
          Tur<i>i</i>Jose
        </h1>

        {/* MENU PC */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-teal-600"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MÓVIL */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
