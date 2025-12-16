import React, { useState } from "react";
import DestinationModal from "../components/DestinationModal";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  const [selectedDestino, setSelectedDestino] = useState(null);

  const destinos = [
    {
      name: "Caminatas Místicas por la Selva Húmedai",
      img: "/images/caminata.webp",
      imgModal: "/images/caminata.webp", // imagen alternativa del modal
      desc: "Prepárate para una inmersión total en uno de los ecosistemas más biodiversos del planeta diseñadas para que experimentes la selva.",
      textoLargo:
        "Guiado por expertos locales Tacana, serás testigo de la exuberante diversidad de fauna y flora. Aprenderás sobre las plantas medicinales que usa nuestra comunidad, seguirás las huellas de mamíferos y te maravillarás con los gigantes del bosque.",


    },
    {
      name: "Avistamiento de Parabas y Miradores Naturales",
      img: "/images/rurre.webp",
      imgModal: "/images/rurre.webp",
      desc: "La Amazonía te regala espectáculos que cortan la respiración, y el de las parabas es uno de ellos.",
      textoLargo:
        "Un Espectáculo de Color: Te llevaremos a miradores naturales estratégicamente ubicados, donde la vista panorámica del bosque se fusiona con el cielo. Al amanecer o al atardecer, seremos testigos del majestuoso vuelo y el estruendoso sonido de las parabas (guacamayos), que acuden a sus barreros para nutrirse de arcilla. Es una explosión de colores escarlata, azul y amarillo que captura la esencia salvaje del Madidi.",
    },
    {
      name: "Refugio y Frescura en los Arroyos",
      img: "/images/amazon.webp",
      imgModal: "/images/amazon.webp",
      desc: "Después de la energía invertida en la exploración de la selva, la madre naturaleza ofrece su recompensa.",
      textoLargo:
        "Pausa Purificadora: Nos dirigiremos a cristalinos arroyos que serpentean por el bosque. Aquí podrás refrescarte en sus aguas puras y revitalizantes, dejando que la frescura del agua de la selva relaje tus músculos y despeje tu mente, preparándote para la siguiente aventura. Un momento de paz absoluta lejos del mundo.",
    },
    {
      name: "Pesca Tradicional en el Río Beni",
      img: "/images/turista1.webp",
      imgModal: "/images/amazon.webp",
      desc: "Conéctate con el río, nuestra principal arteria de vida, a través de una actividad ancestral: la pesca.",
      textoLargo:
        "El Arte de la Pesca Tacana: Aprenderás las técnicas de pesca utilizadas por la comunidad, una actividad esencial para nuestro sustento. Pasarás tiempo en las orillas del Río Beni o en sus afluentes, entendiendo la importancia del río y la paciencia del cazador Tacana. Es una oportunidad para proveer el alimento del día y experimentar la cultura local de una manera práctica.",
    },
    {
      name: "Noche Mística: Campamento y Leyendas",
      img: "/images/campamento.webp",
      imgModal: "/images/campamento.webp",
      desc: "Para los verdaderos amantes de la aventura, ofrecemos una experiencia de inmersión total: pernoctar en las profundidades de la selva virgen.",
      textoLargo:
        "Sobrevivencia y Tradición: Guiado por tu anfitrión Tacana, aprenderás técnicas de supervivencia ancestrales, incluyendo la construcción de tu propio albergue rústico con materiales del bosque. También participarás en la preparación de una cena al estilo campamento.",
    },
    {
      name: "Convivencia Auténtica con la Familia Apuri",
      img: "/images/convivencia.webp",
      imgModal: "/images/convivencia.webp",
      desc: "Esta es la joya de nuestra propuesta: una experiencia directa, sin filtros, con la familia Apuri en el Albergue Eco Tour Tacana.",
      textoLargo:
        "Corazón de la Comunidad: Tendrás la oportunidad de convivir con nosotros, observar y participar en nuestras costumbres cotidianas. Sentarte a comer en nuestra mesa es una invitación a la amistad y a la comprensión profunda de la cultura Tacana.",
    },
    {
      name: "Del Cacao al Chocolate: Taller Artesanala",
      img: "/images/chocolate.webp",
      imgModal: "/images/chocolate.webp",
      desc: "Sumérgete en el proceso ancestral de uno de los tesoros más valiosos de la Amazonía: el cacao.",
      textoLargo:
        "Arte de la Elaboración: Desde la planta de cacao hasta la degustación, participarás en todo el proceso manual y artesanal para elaborar tus propios chocolates. Aprenderás sobre el fruto, la fermentación, el tostado y la molienda, creando un recuerdo dulce y único de tu aventura.",
    },
    {
      name: "Molienda de Caña y Refrescos Naturales",
      img: "/images/caña.webp",
      imgModal: "/images/caña.webp",
      desc: "Vive una experiencia cultural única con la comunidad Tacana.",
      textoLargo:
        "Rescate Histórico: Presencia y participa en la molienda de caña utilizando el trapiche, una máquina ancestral. Con este jugo puro y fresco, podrás preparar y disfrutar de un rico refresco natural, la bebida energética tradicional de la Amazonía",
    },
    {
      name: "Rastros de la Historia: Petroglifos Ancestrales",
      img: "/images/logo piedra dos.webp",
      imgModal: "/images/logo piedra dos.webp",
      desc: "Villa Alcira es también un portal al pasado milenario.",
      textoLargo:
        "Símbolos Precolombinos: A lo largo de las orillas del río Beni y en los alrededores de la comunidad, se encuentran piedras con marcas y símbolos de pueblos no identificados. Tendrás la oportunidad de visitar estos sitios y observar de cerca estas huellas ancestrales, un mudo testimonio de un pasado milenario de nuestros antepasados en este territorio.",
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
