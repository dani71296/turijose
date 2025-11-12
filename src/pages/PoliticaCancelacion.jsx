import React from "react";

export default function PoliticaCancelacion() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">
        Política de Cancelación – TuriJose
      </h1>

      <p className="mb-4">
        Entendemos que los planes pueden cambiar. Por eso ofrecemos una política
        de cancelación flexible para que reserves tu aventura en la selva con
        total tranquilidad.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Condiciones de cancelación:
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>
            Cancelaciones realizadas con más de 30 días de antelación
          </strong>{" "}
          a la fecha de inicio del tour: Reembolso completo del importe total,
          menos una tasa administrativa del <strong>10%</strong>.
        </li>
        <li>
          <strong>
            Cancelaciones realizadas entre 15 y 30 días antes
          </strong>{" "}
          de la fecha de inicio del tour: Reembolso del{" "}
          <strong>50% del importe total</strong>.
        </li>
        <li>
          <strong>Cancelaciones realizadas con menos de 15 días</strong> de
          antelación a la fecha de inicio del tour:{" "}
          <strong>No se realizará ningún reembolso.</strong>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Consideraciones especiales:
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Cambios de vuelo:</strong> Si su vuelo se retrasa o se
          cancela, haremos todo lo posible por reprogramar su excursión sin
          costo adicional, sujeto a disponibilidad.
        </li>
        <li>
          Recomendamos encarecidamente contratar un{" "}
          <strong>seguro de viaje</strong> que cubra cancelaciones e
          interrupciones del viaje.
        </li>
      </ul>

      <p className="mt-6">
        ¡Esperamos darles la bienvenida a la selva pronto!
      </p>

      <p className="mt-8 text-sm text-gray-600">
        <strong>Nota:</strong> Esta política de cancelación está sujeta a
        cambios. Le recomendamos consultar la versión más reciente en nuestro
        sitio web o contactarnos directamente para obtener más información.
      </p>
    </div>
  );
}
