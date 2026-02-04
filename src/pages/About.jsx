// src/pages/About.jsx
import React from "react";

export default function About() {
  const videoLinks = [
    "https://www.youtube.com/embed/aFUurdoecUM",
    "https://www.youtube.com/embed/3xkvy7coce4",
    "https://www.youtube.com/embed/KX9yIpE5z-U",
    "https://www.youtube.com/embed/6Cu7lNJLcqQ",
    "https://www.youtube.com/embed/G-6YXSJvZps",
    "https://www.youtube.com/embed/ULV8CBQVfNc",
    "https://www.youtube.com/embed/E_smaQFvabI",
  ];

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
        <h2 className="text-3xl font-bold mb-4 text-green-700">Quiénes Somos</h2>
        <p className="text-gray-600 leading-relaxed">
          Somos <strong>Eco Tour Tacana,</strong> un emprendimiento turístico familiar
          operado por la familia Apuri, Puro y Cuentas, dentro de la milenaria
          Comunidad Nativa Tacana en el corazón de la Amazonía boliviana.
          No somos solo un destino; somos una aventura auténtica y un compromiso de vida.
        </p>
      </div>

      {/* Misión */}
      <div className="max-w-3xl mb-12">
        <h3 className="text-2xl font-semibold mb-3 text-green-700">Nuestra Misión y Espíritu</h3>
        <p className="text-gray-600 leading-relaxed">
          En un mundo de turismo masivo, Eco Tours Tacana nace de la necesidad y el sueño
          de la familia Apuri: preservar nuestra comunidad y nuestra cultura Tacana.
          Decidimos luchar contra la migración y la modernidad con una oportunidad de
          desarrollo propio, ofreciendo una experiencia inmersiva y consciente.
          <br /><br />
          Ofrecemos una aventura real y mística de contacto directo con la naturaleza
          y nuestra cultura. Aquí, te desconectarás del ajetreo cotidiano y te
          conectarás con el latido de la selva y la historia viva de un pueblo ancestral.
        </p>
      </div>

      {/* Objetivo principal */}
      <div className="max-w-3xl mb-16">
        <h3 className="text-2xl font-semibold mb-3 text-green-700">Objetivo Principal</h3>
        <p className="text-gray-600 leading-relaxed">
          Proteger y preservar este hábitat único para que todos —animales y humanos
          por igual— puedan disfrutar de este pedazo de naturaleza para siempre.
          Lo conseguimos gracias al apoyo de visitantes, voluntarios y donaciones,
          ya que no recibimos financiación gubernamental.
        </p>
      </div>

      {/* BLOQUE 1 — imagen / texto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mb-20">
        <img
          src="/images/turista1.webp"
          className="rounded-xl shadow-md object-cover w-full h-80"
          alt="Comunidad Tacana"
        />
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-3 text-green-700">
            La Comunidad Tacana: Cuna de Nuestro Hogar
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Nuestra comunidad, Villa Alcira, se asienta majestuosamente a orillas
            del río Beni, en el municipio de San Buenaventura. Formamos parte de la
            Reserva Ecológica Madidi.
            <br /><br />
            La economía Tacana se basa en la agricultura, pesca, caza, recolección y la artesanía.
            Nuestra identidad está profundamente arraigada en una cosmovisión única.
            <br /><br />
            El CIPTA ha luchado por la defensa de nuestros derechos y territorios TCO
            Tacana I y II, hogar de especies emblemáticas como el jaguar, la londra y el
            caimán negro.
          </p>
        </div>
      </div>

      {/* BLOQUE 2 — texto / imagen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mb-20">
        <div className="text-left order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-3 text-green-700">
            Impacto: ¿A Quién Beneficias con tu Visita?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Tu decisión de elegir Eco Tours Tacana transforma directamente:
            <br /><br />
            • <strong>La Familia Apuri, Puro y Cuentas:</strong> tu visita asegura la continuidad y crecimiento del proyecto.<br />
            • <strong>Las 50 familias de Villa Alcira:</strong> tus recursos se quedan en la comunidad generando economía local.<br />
            • <strong>La conservación del Madidi:</strong> ayudas a evitar la despoblación y proteger el territorio ancestral.
          </p>
        </div>
        
        <img
          src="/images/turistas2.webp"
          className="rounded-xl shadow-md object-cover w-full h-80 order-1 md:order-2"
          alt="Impacto del turismo"
        />
      </div>

      {/* BLOQUE 3 — imagen / texto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mb-20">
        <img
          src="/images/turistas3.webp"
          className="rounded-xl shadow-md object-cover w-full h-80"
          alt="Eco Tour Tacana especial"
        />

        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-3 text-green-700">
            ¿Qué hace especial a Eco Tour Tacana?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            • Naturaleza virgen: ecosistemas, fauna salvaje y equilibrio natural.<br />
            • Maravillas arqueológicas: vestigios de una civilización precolombina.<br />
            • Hospitalidad cálida: lodge ecológico, gastronomía local y trato familiar.<br />
            • Guías expertos: conocimientos profundos de la selva y cultura Tacana.
            <br /><br />
            Tu visita es una inversión en el futuro de nuestra comunidad y la conservación
            del Madidi.
          </p>
        </div>
      </div>

      {/* SECCIÓN DE VIDEOS YOUTUBE */}
      <div className="max-w-6xl w-full mb-20">
        <h3 className="text-3xl font-bold mb-8 text-green-700">Nuestras Experiencias en Video</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoLinks.map((url, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg bg-white">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={url}
                  title={`YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
