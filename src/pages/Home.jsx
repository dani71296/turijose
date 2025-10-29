import React from "react";

const Home = () => {
  return (
    <div className="text-gray-800">
      {/* HERO */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center">
          <img
            src="/images/capihero.jpeg"
            alt="Rurrenabaque"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />

          {/* Contenido centrado */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
              Descubre la magia del Amazonas Boliviano
            </h1>

            <a
              href="/paquetes"
              className="inline-block bg-yellow-200 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              Ver paquetes
            </a>
          </div>
        </section>


      {/* TEXTO INTRODUCTORIO */}
      <section className="max-w-4xl mx-auto my-12 px-6 text-center">
        <p className="text-lg md:text-xl">
          Un Viaje al Corazón de la Vida Tacana y la Conservación Amazónica.
          Ubicada a un corto viaje de Rurrenabaque y San Buenaventura, Villa Alcira no
          es solo un destino; es una declaración de principios. Somos una comunidad 
          Tacana con cabañas que representan el emprendimiento de cinco familias que han elegido dedicar
          sus vidas a un objetivo fundamental: la conservación del territorio, la flora y la fauna en un entorno de convivencia
          respetuosa.
          Al visitarnos, apoyas directamente este sueño y te sumerges en una experiencia
          genuina y sostenible. Aquí, la aventura es práctica: excava la yuca, cosecha los 
          frutos que da la tierra y refréscate en arroyos escondidos tras emocionantes
          caminatas por la selva. Te invitamos a conectar con nuestras tradiciones, 
          como la fascinante labor de moler caña en el trapiche, un molino rústico que es parte de nuestra historia diaria.
          Descubre Villa Alcira, donde la naturaleza es respetada y cada experiencia te transforma.
        </p>
      </section>

      {/* DESTINOS TURÍSTICOS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-16">
        {[
          {
            name: "Parque Nacional Madidi",
            img: "/images/madidi.jpeg",
            desc: "Uno de los parques más biodiversos del mundo, hogar de miles de especies únicas.",
          },
          {
            name: "Río Beni",
            img: "/images/rurre.jpeg",
            desc: "Un recorrido inolvidable en bote por las aguas del imponente Río Beni.",
          },
          {
            name: "Comunidad San Miguel del Bala",
            img: "/images/amazon.jpeg",
            desc: "Vive una experiencia cultural con la comunidad Tacana y aprende sobre su forma de vida.",
          },
        ].map((destino) => (
          <div
            key={destino.name}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={destino.img}
              alt={destino.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{destino.name}</h3>
              <p className="text-gray-600 text-sm">{destino.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
