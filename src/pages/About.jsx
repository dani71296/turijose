// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12">
      {/* Imagen principal */}
      <div className="max-w-4xl w-full mb-8">
        <img
          src="/images/equipo.webp"
          alt="Nuestro equipo"
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Texto descriptivo */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Quiénes Somos</h2>
        <p className="text-gray-600 leading-relaxed">
          En <strong>Turismo José</strong> creemos que viajar es mucho más que visitar lugares: es
          conectar con culturas, personas y paisajes únicos. Desde nuestros inicios, trabajamos
          para ofrecer experiencias inolvidables a cada viajero, con el compromiso de brindar
          calidad, seguridad y hospitalidad.
        </p>
      </div>

      {/* Galería inferior */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        <img src="/images/turista1.webp" alt="Aventura" className="rounded-xl shadow-md object-cover h-64 w-full" />
        <img src="/images/turistas2.webp" alt="Cultura" className="rounded-xl shadow-md object-cover h-64 w-full" />
        <img src="/images/turistas3.webp" alt="Naturaleza" className="rounded-xl shadow-md object-cover h-64 w-full" />
      </div>
    </div>
  );
}
