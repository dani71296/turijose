import React, { useState } from "react";
import DestinationModal from "../components/DestinationModal";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  const [selectedDestino, setSelectedDestino] = useState(null);

  const destinos = [
    {
      name: "Caminatas Místicas por la Selva Húmedai",
      img: "/images/caminata.webp",
      imgModal: "/images/madidi2.webp", // imagen alternativa del modal
      desc: "Prepárate para una inmersión total en uno de los ecosistemas más biodiversos del planeta diseñadas para que experimentes la selva.",
      textoLargo:
        "San Miguel del Bala es una comunidad Tacana que te invita a vivir su cultura de cerca. Aprende sobre sus tradiciones, participa en la elaboración de artesanías y descubre su respeto por la naturaleza. Una experiencia auténtica y transformadora.",


    },
    {
      name: "Avistamiento de Parabas y Miradores Naturales",
      img: "/images/rurre.webp",
      imgModal: "/images/beni2.webp",
      desc: "La Amazonía te regala espectáculos que cortan la respiración, y el de las parabas es uno de ellos.",
      textoLargo:
        "La Amazonía te regala espectáculos que cortan la respiración, y el de las parabas es uno de ellos",
    },
    {
      name: "Refugio y Frescura en los Arroyos",
      img: "/images/amazon.webp",
      imgModal: "/images/sanmiguel3.webp",
      desc: "Después de la energía invertida en la exploración de la selva, la madre naturaleza ofrece su recompensa.",
      textoLargo:
        "San Miguel del Bala es una comunidad Tacana que te invita a vivir su cultura de cerca. Aprende sobre sus tradiciones, participa en la elaboración de artesanías y descubre su respeto por la naturaleza. Una experiencia auténtica y transformadora.",
    },
    {
      name: "Pesca Tradicional en el Río Beni",
      img: "/images/amazon.webp",
      imgModal: "/images/sanmiguel3.webp",
      desc: "Conéctate con el río, nuestra principal arteria de vida, a través de una actividad ancestral: la pesca.",
      textoLargo:
        "San Miguel del Bala es una comunidad Tacana que te invita a vivir su cultura de cerca. Aprende sobre sus tradiciones, participa en la elaboración de artesanías y descubre su respeto por la naturaleza. Una experiencia auténtica y transformadora.",
    },
    {
      name: "Noche Mística: Campamento y Leyendas",
      img: "/images/campamento.webp",
      imgModal: "/images/sanmiguel3.webp",
      desc: "Para los verdaderos amantes de la aventura, ofrecemos una experiencia de inmersión total: pernoctar en las profundidades de la selva virgen.",
      textoLargo:
        "San Miguel del Bala es una comunidad Tacana que te invita a vivir su cultura de cerca. Aprende sobre sus tradiciones, participa en la elaboración de artesanías y descubre su respeto por la naturaleza. Una experiencia auténtica y transformadora.",
    },
    {
      name: "Convivencia Auténtica con la Familia Apuri",
      img: "/images/convivencia.webp",
      imgModal: "/images/sanmiguel3.webp",
      desc: "Esta es la joya de nuestra propuesta: una experiencia directa, sin filtros, con la familia Apuri en el Albergue Eco Tour Tacana.",
      textoLargo:
        "San Miguel del Bala es una comunidad Tacana que te invita a vivir su cultura de cerca. Aprende sobre sus tradiciones, participa en la elaboración de artesanías y descubre su respeto por la naturaleza. Una experiencia auténtica y transformadora.",
    },
    {
      name: "Del Cacao al Chocolate: Taller Artesanala",
      img: "/images/chocolate.webp",
      imgModal: "/images/sanmiguel3.webp",
      desc: "Sumérgete en el proceso ancestral de uno de los tesoros más valiosos de la Amazonía: el cacao.",
      textoLargo:
        "San Miguel del Bala es una comunidad Tacana que te invita a vivir su cultura de cerca. Aprende sobre sus tradiciones, participa en la elaboración de artesanías y descubre su respeto por la naturaleza. Una experiencia auténtica y transformadora.",
    },
    {
      name: "Molienda de Caña y Refrescos Naturales",
      img: "/images/caña.webp",
      imgModal: "/images/sanmiguel3.webp",
      desc: "Vive una experiencia cultural única con la comunidad Tacana.",
      textoLargo:
        "San Miguel del Bala es una comunidad Tacana que te invita a vivir su cultura de cerca. Aprende sobre sus tradiciones, participa en la elaboración de artesanías y descubre su respeto por la naturaleza. Una experiencia auténtica y transformadora.",
    },
    {
      name: "Rastros de la Historia: Petroglifos Ancestrales",
      img: "/images/logo piedra dos.webp",
      imgModal: "/images/sanmiguel3.webp",
      desc: "Villa Alcira es también un portal al pasado milenario.",
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
