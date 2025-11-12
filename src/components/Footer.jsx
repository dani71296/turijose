// Footer.jsx
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left">
        {/* LOGO */}
        <div className="mb-6 md:mb-0">
          <Link
            to="/"
            className="text-2xl font-bold text-teal-500 hover:text-teal-400 transition-colors"
          >
            Tur<i>i</i>Jose
          </Link>
        </div>

        {/* CONTACTO */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact us</h3>
          <p className="text-sm text-gray-300">
            Email:{" "}
            <a
              href="mailto:contacto@turismojose.com"
              className="text-teal-400 hover:underline"
            >
              contacto@turismojose.com
            </a>
          </p>
        </div>

        {/* ENLACES */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Información</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <Link
                to="/politica-cancelacion"
                className="hover:text-teal-400 transition-colors"
              >
                Política de Cancelación
              </Link>
            </li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Turismo José. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;

