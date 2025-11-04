import React, { useState } from "react";
import DestinationModal from "../components/DestinationModal";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  const [selectedDestino, setSelectedDestino] = useState(null);

  const destinos = [
    {
      name: "Parque Nacional Madidi",
      img: "/images/madidi.webp",
      imgModal: "/images/madidi2.webp", // imagen alternativa del modal
      desc: "Uno de los parques más biodiversos del mundo.",
      textoLargo:
        "El Parque Nacional Madidi es una joya natural del Amazonas boliviano. Abarca montañas, selvas y ríos, y alberga una biodiversidad inigualable. Aquí puedes realizar caminatas, observar fauna silvestre, y conocer comunidades locales comprometidas con la conservación del entorno.",
    },
    {
      name: "Río Beni",
      img: "/images/rurre.webp",
      imgModal: "/images/beni2.webp",
      desc: "Un recorrido inolvidable por el imponente Río Beni.",
      textoLargo:
        "Navegar por el Río Beni es adentrarse en la esencia del Amazonas. Desde sus aguas puedes admirar la selva exuberante, aves tropicales, y comunidades ribereñas. Es el punto de partida de muchas aventuras hacia el Madidi y la Pampa boliviana.",
    },
    {
      name: "Comunidad San Miguel del Bala",
      img: "/images/amazon.webp",
      imgModal: "/images/sanmiguel3.webp",
      desc: "Vive una experiencia cultural única con la comunidad Tacana.",
      textoLargo:
        "San Miguel del Bala es una comunidad Tacana que te invita a vivir su cultura de cerca. Aprende sobre sus tradiciones, participa en la elaboración de artesanías y descubre su respeto por la naturaleza. Una experiencia auténtica y transformadora.",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HERO */}
      <HeroCarousel />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto my-12 px-6 text-center">
        <p className="text-lg md:text-xl">
          Un Viaje al Corazón de la Vida Tacana y la Conservación Amazónica...
        </p>
      </section>

      {/* DESTINOS */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-16">
  {destinos.map((destino) => (
    <div
      key={destino.name}
      onClick={() => setSelectedDestino(destino)}
      className="relative bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group"
    >
      {/* Imagen con overlay y botón centrado */}
      <div className="relative">
        <img
          src={destino.img}
          alt={destino.name}
          className="w-full h-56 object-cover"
        />
        {/* Overlay semitransparente con botón */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full shadow-lg">
            Ver más
          </button>
        </div>
      </div>

      {/* Texto */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{destino.name}</h3>
        <p className="text-gray-600 text-sm">{destino.desc}</p>
      </div>
    </div>
  ))}
</section>


      {/* MODAL */}
      <DestinationModal
        destino={selectedDestino}
        onClose={() => setSelectedDestino(null)}
      />
    </div>
  );
};

export default Home;
