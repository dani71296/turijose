import React from 'react'

export default function Mapa() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Título */}
      <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        📍 ¿Cómo llegar a Eco Tour Tacana – Comunidad Villa Alcira?
      </h2>

      {/* Descripción principal */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        La aventura comienza antes de llegar. <strong>Villa Alcira</strong> se
        encuentra estratégicamente ubicada a tan solo <strong>25 minutos</strong>{" "}
        de las poblaciones turísticas de <strong>San Buenaventura</strong> y{" "}
        <strong>Rurrenabaque</strong>, ofreciendo una accesibilidad que nos permite
        compartir nuestro paraíso contigo rápidamente.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Existen <strong>dos vías para llegar a los albergues</strong>: una mediante
        el <strong>río</strong> y otra por <strong>carretera</strong>.
      </p>

      {/* Sección Rurrenabaque */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-green-800 mb-4">
          🌎 Llegando desde el extranjero
        </h3>

        <p className="text-gray-700 mb-4 leading-relaxed">
          <strong>Rurrenabaque</strong> es la población más conocida y promocionada
          internacionalmente por Bolivia como destino turístico.  
          Si te encuentras en el extranjero, sigue estos pasos:
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            Llegar a la ciudad de <strong>La Paz</strong>, al{" "}
            <strong>Aeropuerto Internacional El Alto</strong> (Bolivia).
          </li>
          <li>
            Una vez en <strong>La Paz</strong> —declarada{" "}
            <em>“Ciudad Maravilla”</em> en 2014 por la fundación suiza
            New7Wonders— puedes continuar tu ruta de dos maneras:
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>
                ✈️ <strong>Vuelo a Rurrenabaque</strong> (aprox. 1 hora).
              </li>
              <li>
                🚌 <strong>Vía terrestre</strong> desde la zona{" "}
                <strong>Villa Fátima</strong> (La Paz).  
                Es un viaje largo de aproximadamente <strong>17 horas</strong>,
                pero te permitirá vivir el impresionante descenso desde el
                altiplano (3650 msnm) hasta el trópico (274 msnm).
              </li>
            </ul>
          </li>
          <li>
            Al llegar a <strong>Rurrenabaque</strong>, nosotros te llevaremos a{" "}
            <strong>Villa Alcira</strong>, donde se encuentra{" "}
            <strong>Eco Tour Tacana</strong>, en un recorrido de aproximadamente{" "}
            <strong>25 minutos río arriba</strong>.
          </li>
        </ol>
      </div>

      {/* Mapa */}
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg borde">
        <iframe
          title="Mapa Eco Tour Tacana"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.064309595855!2d-67.52617033463196!3d-14.48376628968512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9161d1007b561d95%3A0xb1662b1e3a3f2731!2sComunidad%20villa%20Alcira!5e0!3m2!1ses!2smx!4v1765856561320!5m2!1ses!2smx"
          width="100%"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </section>
  );

}
