"use client";

import { MessageCircle } from "lucide-react";

const whatsappNumber = "558596456730"; // WhatsApp number

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-whatsapp text-white shadow-xl hover:bg-whatsapp-dark transition-colors duration-300"
      style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}
