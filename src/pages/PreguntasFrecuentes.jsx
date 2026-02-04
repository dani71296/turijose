import React from "react";

const faqs = [
  {
    pregunta: "¿Es necesario estar vacunado contra la Fiebre Amarilla?",
    respuesta: "Sí, para ingresar a la Amazonía boliviana se recomienda contar con la vacuna contra la fiebre amarilla y portar el carnet internacional, especialmente si vienes de otros países o viajarás a zonas más profundas de la selva."
  },
  {
    pregunta: "¿Qué debo llevar en mi maleta para el tour?",
    respuesta: "Recomendamos ropa ligera de secado rápido (pantalones largos y camisas de manga larga para mosquitos), repelente con DEET, protector solar, linterna, calzado cómodo (botas de trekking) y una chaqueta impermeable para lluvias repentinas."
  },
  {
    pregunta: "¿Hay señal de internet o celular en el albergue?",
    respuesta: "En Eco Tours Tacana fomentamos la desconexión total. La señal celular es limitada o nula en la selva. Es la oportunidad perfecta para conectar con la naturaleza, aunque en el pueblo de San Buenaventura o Rurrenabaque la señal es estable."
  },
  {
    pregunta: "¿Los tours incluyen alimentación?",
    respuesta: "Sí, todos nuestros paquetes incluyen pensión completa (desayuno, almuerzo y cena) preparada con ingredientes locales y frescos, adaptándonos también a dietas vegetarianas o alérgicas si se avisa con antelación."
  },
  {
    pregunta: "¿Cuál es la mejor época para visitar el Madidi?",
    respuesta: "La temporada seca (de mayo a octubre) es ideal porque hay menos mosquitos y es más fácil observar fauna. Sin embargo, la temporada de lluvias (noviembre a abril) ofrece paisajes más verdes y exuberantes, aunque los caminos pueden ser más difíciles."
  },
  {
    pregunta: "¿Cómo llego desde La Paz hasta Rurrenabaque?",
    respuesta: "Puedes llegar en avión (vuelos de 45 minutos que ofrecen una vista espectacular de los Andes) o por tierra en bus (un viaje de aproximadamente 12 a 15 horas). Una vez en Rurrenabaque, nosotros te recogemos para iniciar la aventura."
  }
];

export default function PreguntasFrecuentes() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Preguntas Frecuentes</h1>
          <p className="text-gray-600 text-lg">
            Todo lo que necesitas saber antes de embarcarte en la aventura hacia el corazón del Madidi.
          </p>
        </div>

        {/* Lista de Preguntas */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-start">
                <span className="mr-3 text-green-500 font-bold">?</span>
                {faq.pregunta}
              </h3>
              <p className="text-gray-600 leading-relaxed ml-6">
                {faq.respuesta}
              </p>
            </div>
          ))}
        </div>

        {/* Sección de contacto extra */}
            <div className="mt-16 bg-green-700 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-2">¿Aún tienes dudas?</h2>
                <p className="mb-6">Estamos aquí para ayudarte a planificar el viaje de tu vida.</p>
  
                <a 
                href="https://wa.me/59167042665"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                Contáctanos por WhatsApp
                </a>
            </div>
      </div>
    </div>
  );
}