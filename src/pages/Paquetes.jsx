import { useState } from "react";
import { Link } from "react-router-dom";

const Paquete = ({ titulo, imagen, resumen, detalle }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden mb-10 max-w-6xl mx-auto transform transition duration-300 hover:scale-105">
      <img
        src={imagen}
        alt={titulo}
        className="md:w-1/2 h-64 object-cover"
      />
      <div className="p-6 flex flex-col justify-between md:w-1/2 ">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-3">{titulo}</h2>
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {expandido ? detalle : resumen}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => setExpandido(!expandido)}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-200 transition"
          >
            {expandido ? "Ver menos" : "Ver más"}
          </button>
          <Link
            to="/contacto"
            className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition"
          >
            Solicitar
          </Link>
        </div>
      </div>
    </div>
  );
};

const Paquetes = () => {
  return (
    <div className=" min-h-screen py-12">
      <h1 className="text-3xl font-bold text-center mb-10 text-green-800">
        Nuestros Paquetes Turísticos
      </h1>

      {/* === PAQUETE 1 DÍA === */}
      <Paquete
        titulo="Selva 1 Día – Cañón del Bala y Madidi"
        imagen="/images/canion-bala.webp"
        resumen={`Una aventura de un día perfecta para quienes buscan naturaleza, cultura y emoción. 
Explora el imponente Cañón del Bala y adéntrate en la selva del Madidi con guías locales.`}
        detalle={`🗓️ ITINERARIO – 1 DÍA

08:00 a.m. – Salida desde el puerto de Rurrenabaque en embarcación hacia el Parque Nacional Madidi.  
Navegamos por el majestuoso río Beni hasta llegar al impresionante Cañón del Bala, una formación natural de roca donde podrás tomar fotografías y disfrutar de la vista.

10:00 a.m. – Continuamos hacia la zona de ingreso al Madidi. Caminata guiada por senderos naturales donde aprenderás sobre las plantas medicinales, aves y la biodiversidad única del lugar.

12:30 p.m. – Almuerzo típico en la comunidad local, con ingredientes frescos de la región.  
14:00 p.m. – Actividad de observación de fauna (aves, monos y mariposas).  
Opción de baño en el río o paseo corto por el bosque tropical.

16:00 p.m. – Retorno a Rurrenabaque.  
17:30 p.m. – Llegada y fin del recorrido.`}
      />

      {/* === PAQUETE 2 DÍAS === */}
      <Paquete
        titulo="Selva 2 Días – Comunidad Tacana"
        imagen="/images/selva-tacana.webp"
        resumen={`Vive dos días de aventura cultural y natural en la comunidad indígena Tacana de Villa Alcira 🌿. 
Explora la selva prístina, conoce las tradiciones locales, la molienda de caña, el proceso del cacao y disfruta de baños naturales.`}
        detalle={`🗓️ DÍA 1
09:30 a.m. – Partimos del puerto de Rurrenabaque rumbo a la comunidad indígena Tacana de Villa Alcira (45 min aprox).  
12:30 p.m. – Almuerzo típico.  
14:00 p.m. – Organizamos mochilas y nos dirigimos a la jungla prístina para conocer medicina natural y cultura Tacana.  
Caminata de 3 horas hasta el refugio.  
Relajación y baño en piscina natural.  
19:30 – Cena.  
Caminata nocturna para observar fauna silvestre.

🗓️ DÍA 2
07:30 a.m. – Desayuno.  
Regreso a la comunidad.  
12:30 p.m. – Almuerzo.  
14:30 – Actividad de molienda de caña y proceso del cacao 🍫.  
Actividad opcional: elaboración de anillos o collares con materiales naturales.  
19:30 – Cena.  
07:30 – Desayuno.  
Retorno a Rurrenabaque.  
(Continuación opcional hacia Pampas.)

🕓 VARIANTE OPCIONAL
16:00 – Llegada desde Pampas.  
17:30 – Salida hacia Villa Alcira.  
19:30 – Cena y pernocte.  
08:00 – Desayuno y actividades agrícolas (caña y cacao).  
14:00 – Caminata por la selva prístina 🌎.  
19:30 – Cena y descanso.  
07:30 – Desayuno, regreso y actividad artesanal.  
Visita al Cañón del Bala (según temporada).  
Retorno a Rurrenabaque.`}
      />

      {/* === PAQUETE 3 DÍAS === */}
      <Paquete
        titulo="Selva 3 Días – Aventura Completa"
        imagen="/images/combinado-selva-pampas.webp"
        resumen={`La experiencia más completa 🌎: combina el recorrido por el Cañón del Bala y el Madidi con la inmersión cultural en la comunidad Tacana. Ideal para quienes buscan aventura, cultura y naturaleza en su máxima expresión.`}
        detalle={`🗓️ DÍA 1 – Cañón del Bala y Madidi
08:00 a.m. – Salida desde Rurrenabaque hacia el Parque Nacional Madidi.  
Recorrido por el Cañón del Bala, exploración de formaciones rocosas y paisajes del río Beni.  
12:30 – Almuerzo típico en la comunidad.  
Por la tarde, caminata guiada por senderos del Madidi para conocer flora y fauna tropical.  
Retorno y cena en Rurrenabaque.

🗓️ DÍA 2 – Comunidad Tacana
09:30 a.m. – Partida en bote hacia Villa Alcira (45 min).  
12:30 – Almuerzo en la comunidad.  
14:00 – Caminata por la selva prístina para conocer medicina natural y cultura ancestral Tacana.  
Caminata de 3 horas hasta el refugio y baño en piscina natural.  
19:30 – Cena.  
Caminata nocturna para observar fauna silvestre.

🗓️ DÍA 3 – Cultura y Artesanía
07:30 – Desayuno.  
Regreso a la comunidad.  
12:30 – Almuerzo.  
Taller artesanal: elaboración de collares, anillos o recuerdos naturales.  
Visita al proceso del cacao 🍫 y molienda de caña de azúcar.  
15:00 – Visita al Cañón del Bala (según clima).  
Retorno a Rurrenabaque al finalizar la tarde.`}
      />
    </div>
  );
};

export default Paquetes;

