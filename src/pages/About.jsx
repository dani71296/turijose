// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12 text-gray-800">
      {/* Imagen principal */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <img
          src="/images/equipo.webp"
          alt="Nuestro equipo"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <h1 className="relative text-white text-5xl font-bold z-10">
          QUIENES SOMOS
        </h1>
      </div>

      {/* Quiénes somos */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Quiénes Somos</h2>
        <p className="text-gray-600 leading-relaxed">
          En <strong>Turismo José</strong> creemos que viajar es mucho más que visitar lugares:
          es conectar con culturas, personas y paisajes únicos. Desde nuestros inicios, trabajamos
          para ofrecer experiencias inolvidables a cada viajero, con el compromiso de brindar
          calidad, seguridad y hospitalidad.
        </p>
      </div>

      {/* Misión */}
      <div className="max-w-3xl mb-12">
        <h3 className="text-2xl font-semibold mb-3 text-blue-800">Nuestra Misión</h3>
        <p className="text-gray-600 leading-relaxed">
          Brindar experiencias turísticas auténticas y responsables, promoviendo el desarrollo
          sostenible de las comunidades locales y la conservación del medio ambiente, mientras
          generamos recuerdos inolvidables para nuestros visitantes.
        </p>
      </div>

      {/* Visión */}
      <div className="max-w-3xl mb-12">
        <h3 className="text-2xl font-semibold mb-3 text-blue-800">Nuestra Visión</h3>
        <p className="text-gray-600 leading-relaxed">
          Ser reconocidos como una de las principales agencias de turismo sostenible en Bolivia,
          inspirando a más personas a descubrir la riqueza natural y cultural de nuestro país con
          respeto, responsabilidad y pasión.
        </p>
      </div>

      {/* Valores */}
      <div className="max-w-5xl mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-blue-800">Nuestros Valores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {[
            { title: "Respeto", desc: "Valoramos la diversidad cultural, natural y humana en cada experiencia." },
            { title: "Hermandad", desc: "Fomentamos la unión, la confianza y el apoyo entre viajeros y comunidades." },
            { title: "Responsabilidad", desc: "Actuamos con compromiso hacia el entorno y las personas." },
            { title: "Pasión", desc: "Amamos lo que hacemos y lo transmitimos en cada aventura." },
            { title: "Seguridad", desc: "Cuidamos de nuestros clientes y colaboradores en todo momento." },
            { title: "Sostenibilidad", desc: "Promovemos el turismo consciente que respeta la naturaleza." },
          ].map((valor) => (
            <div
              key={valor.title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transform transition duration-300 hover:scale-110 "
            >
              <h4 className="text-xl font-bold mb-2 text-blue-700">{valor.title}</h4>
              <p className="text-gray-600">{valor.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Galería inferior */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl ">
        <img
          src="/images/turista1.webp"
          alt="Aventura"
          className="rounded-xl shadow-md object-cover h-64 w-full transform transition duration-300 hover:scale-110"
        />
        <img
          src="/images/turistas2.webp"
          alt="Cultura"
          className="rounded-xl shadow-md object-cover h-64 w-full transform transition duration-300 hover:scale-110"
        />
        <img
          src="/images/turistas3.webp"
          alt="Naturaleza"
          className="rounded-xl shadow-md object-cover h-64 w-full transform transition duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
}

