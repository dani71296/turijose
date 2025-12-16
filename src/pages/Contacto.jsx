import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    age: "",
    nationality: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Lo enviaremos pronto 🚀");
  };

  return (
    <section className="flex flex-col items-center justify-center bg-gray-100">
      {/* 🟢 HERO */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <img
          src="/images/contacto.webp"
          alt="Contáctanos"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <h1 className="relative text-white text-5xl font-bold z-10">
          Contáctanos
        </h1>
      </div>

      {/* 🟡 TEXTO INFORMATIVO */}
      <div className="max-w-2xl text-center mt-10 px-4">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Información y Reserva
        </h2>
        <p className="text-gray-700">
          Para hacer una reserva o para solicitar precios y más información,
          por favor llena el formulario a continuación. ¡Respondemos a los
          correos rápidamente!
        </p>
      </div>

      {/* 🟣 Modalidad de Pago */}
      <div className="max-w-2xl text-center mt-8 px-4">
        <h3 className="text-xl font-bold text-green-700 mb-2">
          Modalidad de Pago
        </h3>
        <p className="text-gray-700">
          Los pagos se realizan en <strong>dólares americanos (USD)</strong> al
          momento de la llegada, de manera presencial.  
          Es necesario escribirnos para confirmar la reserva en la fecha
          deseada.
        </p>
      </div>

      {/* 🔵 FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg mt-8"
      >
        {/* Nombre */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Correo */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Fecha de viaje */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Fecha de viaje
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Edad (opcional) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Edad
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Nacionalidad (opcional) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Nacionalidad
          </label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* WhatsApp (opcional) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Número de WhatsApp
          </label>
          <input
            type="tel"
            name="whatsapp"
            placeholder="+591 70000000"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Mensaje */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Mensaje
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Enviar Mensaje
        </button>
      </form>

      {/* 🔴 PIE DE CONTACTO */}
      <div className="text-center mt-12 mb-8">
        <h3 className="text-xl font-bold text-green-700 mb-2">Contáctanos</h3>
        <p className="text-gray-700">📧 contacto@tueempresa.com</p>
      </div>
    </section>
  );
}

