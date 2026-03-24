"use client";

import { useEffect, useRef } from "react";
import { Wheat, LeafyGreen, Flame } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  {
    icon: Wheat,
    title: "Massa Artesanal",
    description:
      "Preparada à mão todos os dias com farinha especial importada. Fermentação lenta de 48h para uma textura irresistível.",
    accent: "from-neon-yellow/20 to-transparent",
    iconColor: "text-neon-yellow",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(255,193,7,0.15)]",
  },
  {
    icon: LeafyGreen,
    title: "Ingredientes Selecionados",
    description:
      "Selecionamos a dedo cada ingrediente. Queijos nobres, molho artesanal de tomates frescos e temperos especiais.",
    accent: "from-green-500/20 to-transparent",
    iconColor: "text-green-400",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
  },
  {
    icon: Flame,
    title: "Forno a Lenha",
    description:
      "Temperatura perfeita a 450°C. A crosta dourada e crocante que só o forno a lenha autêntico consegue entregar.",
    accent: "from-neon-red/20 to-transparent",
    iconColor: "text-neon-red",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(255,45,45,0.15)]",
  },
];

export default function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".value-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    };
    initAnimations();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="relative py-24 sm:py-32 bg-brand-dark overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <p className="text-neon-red font-medium text-sm tracking-[0.25em] uppercase">
            Por que nos escolher?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            O Segredo do{" "}
            <span className="text-neon-yellow neon-text-yellow italic">Sabor Perfeito</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-neon-red to-neon-orange mx-auto mt-4" />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`value-card group relative bg-card-bg border border-card-border rounded-2xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 cursor-default ${feature.glowColor}`}
            >
              {/* Accent gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 space-y-5">
                <div className={`${feature.iconColor} transition-transform duration-500 group-hover:scale-110`}>
                  <feature.icon size={44} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width image banner */}
        <div className="mt-16 sm:mt-20 relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96 group">
          <Image
            src="/images/forno_lenha.png"
            alt="Forno a lenha artesanal da Os Brothers Pizzaria"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10">
            <p className="text-neon-yellow text-xs tracking-[0.2em] uppercase mb-2">Tradição & Qualidade</p>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Desde o Primeiro Forno, <br className="hidden sm:block" />
              o Mesmo Amor.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
