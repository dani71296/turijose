// src/components/WhatsappButton.jsx
import React from "react";
import { MessageCircle } from "lucide-react"; // 👈 ícono moderno

export default function WhatsappButton() {
  const phoneNumber = "59174261375"; // Reemplázalo con tu número
  const message = "¡Hola! Me gustaría recibir más información sobre sus servicios.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl z-50"
    >
      <MessageCircle size={28} strokeWidth={2.5} />
    </a>
  );
}
