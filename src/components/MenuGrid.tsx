"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

// ============ CONFIG ============
const whatsappNumber = "5585999999999"; // Replace with actual WhatsApp number

// ============ MENU DATA ============
type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

type MenuCategory = {
  id: string;
  title: string;
  emoji: string;
  items: MenuItem[];
};

const MENU_DATA: MenuCategory[] = [
  {
    id: "pizzas",
    title: "Pizzas Premium",
    emoji: "🍕",
    items: [
      {
        name: "Calabresa Especial",
        description: "Calabresa artesanal, cebola caramelizada, azeitonas pretas e orégano fresco.",
        price: "R$ 31,99",
        image: "/images/pizza_premium.png",
        badge: "Mais Pedida",
      },
      {
        name: "Mussarela Nobre",
        description: "Generosa camada de mussarela premium derretida, tomate fresco e manjericão.",
        price: "R$ 29,99",
        image: "/images/pizza_premium.png",
      },
      {
        name: "Margherita Clássica",
        description: "Molho San Marzano, mussarela de búfala, manjericão fresco e azeite extra virgem.",
        price: "R$ 34,99",
        image: "/images/pizza_premium.png",
        badge: "Chef's Choice",
      },
      {
        name: "Mista Brothers",
        description: "O melhor dos dois mundos: calabresa artesanal e mussarela nobre em perfeita harmonia.",
        price: "R$ 33,99",
        image: "/images/pizza_premium.png",
      },
      {
        name: "Milho com Bacon",
        description: "Milho verde selecionado, bacon crocante, mussarela e um toque de catupiry.",
        price: "R$ 32,99",
        image: "/images/pizza_premium.png",
      },
      {
        name: "3 Queijos",
        description: "Mussarela, provolone e parmesão gratinado. Para os verdadeiros amantes de queijo.",
        price: "R$ 35,99",
        image: "/images/pizza_premium.png",
      },
      {
        name: "Alho Frito",
        description: "Mussarela premium com lâminas de alho frito crocante e azeite aromatizado.",
        price: "R$ 31,99",
        image: "/images/pizza_premium.png",
      },
      {
        name: "Chocolate Premium",
        description: "Chocolate belga derretido, morangos frescos e granulado. A sobremesa perfeita.",
        price: "R$ 33,99",
        image: "/images/pizza_chocolate.png",
        badge: "Doce",
      },
    ],
  },
  {
    id: "combos",
    title: "Combos Especiais",
    emoji: "🎉",
    items: [
      {
        name: "Combo Pizza + Refri",
        description: "1 Pizza Grande Premium + 1 Refrigerante 2L. O combo perfeito para a família.",
        price: "R$ 44,99",
        image: "/images/combo_pizza.png",
        badge: "Economia",
      },
      {
        name: "Combo Calzone + Refri",
        description: "1 Calzone recheado + 1 Refrigerante Lata. Massa crocante e recheio generoso.",
        price: "R$ 27,99",
        image: "/images/calzone_premium.png",
      },
    ],
  },
  {
    id: "esfihas",
    title: "Esfihas Artesanais",
    emoji: "🥟",
    items: [
      {
        name: "Esfiha de Carne",
        description: "Carne moída temperada com especiarias árabes, cebola e tomate. Receita tradicional.",
        price: "R$ 5,99",
        image: "/images/esfiha_premium.png",
        badge: "Artesanal",
      },
      {
        name: "Esfiha de Frango",
        description: "Frango desfiado com catupiry cremoso. Leve, saborosa e irresistível.",
        price: "R$ 5,99",
        image: "/images/esfiha_premium.png",
      },
      {
        name: "Esfiha de Queijo",
        description: "Blend especial de queijos derretidos. Crocante por fora, cremosa por dentro.",
        price: "R$ 5,99",
        image: "/images/esfiha_premium.png",
      },
    ],
  },
];

// ============ COMPONENT ============
export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("pizzas");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".menu-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    };
    initAnimations();
  }, []);

  // Animate cards when category changes
  useEffect(() => {
    const animateCards = async () => {
      const { gsap } = await import("gsap");
      gsap.fromTo(
        ".menu-item-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    };
    animateCards();
  }, [activeCategory]);

  const currentCategory = MENU_DATA.find((c) => c.id === activeCategory)!;

  const buildWhatsAppLink = (itemName: string) => {
    const encodedText = encodeURIComponent(
      `Olá, gostaria de pedir: ${itemName}`
    );
    return `https://wa.me/${whatsappNumber}?text=${encodedText}`;
  };

  return (
    <section id="cardapio" ref={sectionRef} className="relative py-24 sm:py-32 bg-brand-darker overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="menu-header text-center mb-12 sm:mb-16 space-y-4">
          <p className="text-neon-red font-medium text-sm tracking-[0.25em] uppercase">
            Nosso Cardápio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            Sabores que{" "}
            <span className="text-neon-orange italic">Conquistam</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Cada receita é uma obra de arte. Escolha seu favorito e peça direto pelo WhatsApp.
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-neon-red to-neon-orange mx-auto mt-4" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {MENU_DATA.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-neon-red to-neon-orange text-white border-transparent shadow-lg shadow-neon-red/20"
                  : "bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className="menu-item-card group bg-card-bg border border-card-border rounded-2xl overflow-hidden transition-all duration-500 menu-card-glow flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent" />

                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-3 right-3 bg-neon-red/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-neon-yellow transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
                  <span className="text-xl font-bold text-neon-yellow">
                    {item.price}
                  </span>
                  <a
                    href={buildWhatsAppLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold"
                  >
                    <MessageCircle size={14} />
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promotional banner */}
        <div className="mt-16 sm:mt-20 relative rounded-2xl overflow-hidden bg-gradient-to-r from-neon-red/10 via-neon-orange/10 to-neon-yellow/10 border border-zinc-800/50 p-8 sm:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-red/5 to-transparent" />
          <div className="relative z-10 text-center space-y-4">
            <p className="text-neon-yellow text-sm font-medium tracking-widest uppercase">
              🔥 Promoção Especial
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Combo Família: 2 Pizzas + Refri 2L
            </h3>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Perfeito para reunir a galera! Escolha suas 2 pizzas favoritas e ganhe refrigerante.
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-neon-red neon-text-red">
              R$ 79,99
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, gostaria de pedir o Combo Família: 2 Pizzas + Refri 2L")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold mt-4"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle size={18} />
                Garantir Meu Combo
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
