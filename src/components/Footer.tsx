"use client";

import { MapPin, Clock, Phone, Mail } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const whatsappNumber = "5585999999999"; // Replace with actual WhatsApp number

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="relative bg-brand-darker border-t border-zinc-800/50">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Os Brothers
              </h3>
              <p className="text-xs tracking-[0.2em] uppercase text-neon-yellow/70 font-medium">
                Pizzaria & Esfiharia
              </p>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Trazendo o sabor autêntico da pizza artesanal para Fortaleza. Cada fatia é uma experiência única.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-neon-red hover:border-neon-red/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-neon-red hover:border-neon-red/50 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <Clock size={16} className="text-neon-yellow" />
              Horário de Funcionamento
            </h4>
            <div className="space-y-2.5">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Terça a Sexta</span>
                <span className="text-zinc-300 font-medium">18:00 - 23:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Sábado</span>
                <span className="text-zinc-300 font-medium">17:00 - 00:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Domingo</span>
                <span className="text-zinc-300 font-medium">17:00 - 23:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Segunda</span>
                <span className="text-neon-red text-xs font-medium">Fechado</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <MapPin size={16} className="text-neon-yellow" />
              Localização
            </h4>
            <div className="space-y-3">
              <p className="text-zinc-400 text-sm leading-relaxed">
                Rua Exemplo, 123<br />
                Bairro Centro<br />
                Fortaleza, CE - 60000-000
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neon-red text-sm font-medium hover:text-neon-orange transition-colors duration-300"
              >
                Ver no Google Maps →
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <Phone size={16} className="text-neon-yellow" />
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 text-sm hover:text-whatsapp transition-colors duration-300"
              >
                <Phone size={14} />
                (85) 9 9999-9999
              </a>
              <a
                href="mailto:contato@osbrotherspizzaria.com.br"
                className="flex items-center gap-2 text-zinc-400 text-sm hover:text-neon-yellow transition-colors duration-300"
              >
                <Mail size={14} />
                contato@osbrothers.com.br
              </a>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold mt-2"
            >
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs text-center sm:text-left">
            © {currentYear} Os Brothers Pizzaria & Esfiharia. Todos os direitos reservados.
          </p>
          <p className="text-zinc-700 text-xs">
            Feito com ❤️ em Fortaleza, CE
          </p>
        </div>
      </div>
    </footer>
  );
}
