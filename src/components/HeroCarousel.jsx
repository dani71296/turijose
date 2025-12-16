import { useState, useEffect } from "react";

export default function HeroCarousel() {
  const slides = [
    {
      src: "/images/capihero.webp",
      title: "Descubre la magia del Amazonas Boliviano",
    },
    {
      src: "/images/canion-bala.webp",
      title: "Explora la selva y su biodiversidad única",
    },
    {
      src: "/images/madidi.webp",
      title: "Vive una experiencia inolvidable en el río Beni",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ⏳ Cambio automático cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // 🔘 Funciones para avanzar o retroceder manualmente
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Imágenes del carrusel */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Contenido centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
          {slides[current].title}
        </h1>
        <a
          href="/Paquetes"
          className="inline-block bg-yellow-200 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Ver paquetes
        </a>
      </div>

      {/* Botones izquierda/derecha */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition z-20"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition z-20"
      >
        ❯
      </button>

      {/* Indicadores inferiores */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-yellow-300 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
