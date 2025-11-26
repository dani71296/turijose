import React from "react";
import { useNavigate } from "react-router-dom";

const DestinationModal = ({ destino, onClose }) => {
  const navigate = useNavigate();

  if (!destino) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      {/* Contenedor scrollable */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Botón cerrar (visible en móvil) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-white bg-black/60 hover:bg-black rounded-full px-3 py-1"
        >
          ✕
        </button>

        {/* Imagen (ahora se adapta sin recorte) */}
        <img
          src={destino.imgModal || destino.img}
          alt={destino.name}
          className="w-full h-auto max-h-[50vh] object-contain bg-white"
        />

        {/* Contenido del modal */}
        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{destino.name}</h2>
          <p className="text-gray-700 text-base mb-6 leading-relaxed ">
            {destino.textoLargo}
          </p>

          {/* Botón “Conocer” siempre visible en móvil */}
          <button
            onClick={() => navigate("/contacto")}
            className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-8 rounded-full transition"
          >
            Conocer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;
