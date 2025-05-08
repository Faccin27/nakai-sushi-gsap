"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { menuItems } from "@/data/menu-data";
import { staggerReveal, textReveal } from "@/lib/gsap";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import gsap from "gsap";

const Menu: React.FC = () => {
  const leftHashiRef = useRef<HTMLDivElement>(null);
  const rightHashiRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const paintedBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    staggerReveal(".menu-container", ".menu-item", 0.2);
    textReveal(".menu-heading");

    // Animação do hashi esquerdo
    if (leftHashiRef.current) {
      gsap.fromTo(
        leftHashiRef.current,
        {
          opacity: 0,
          x: -100,
          rotate: -15,
        },
        {
          opacity: 1,
          x: 0,
          rotate: 15,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#menu",
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animação do hashi direito
    if (rightHashiRef.current) {
      gsap.fromTo(
        rightHashiRef.current,
        {
          opacity: 0,
          x: 100,
          rotate: 15,
        },
        {
          opacity: 1,
          x: 0,
          rotate: -15,
          duration: 3.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "#menu",
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animação para os cards sobre o fundo pintado
    gsap.fromTo(
      ".feature-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: paintedBgRef.current,
          start: "top bottom-=100",
          end: "top center",
          scrub: 0.3,
        },
      }
    );
  }, []);

  const sushi = menuItems.filter((item) => item.category === "sushi");
  const rolls = menuItems.filter((item) => item.category === "rolls");
  const sashimi = menuItems.filter((item) => item.category === "sashimi");
  const hot = menuItems.filter((item) => item.category === "hot");
  const dessert = menuItems.filter((item) => item.category === "dessert");

  return (
    <section
      id="menu"
      className="section bg-nakai-beige relative overflow-hidden"
    >
      {/* Hashi esquerdo */}
      <div
        ref={leftHashiRef}
        className="
        absolute -left-20 z-[999]
        w-[300px] h-[200px] -top-12
        sm:w-[350px] sm:h-[250px] sm:-top-11
        md:w-[400px] md:h-[300px] md:-top-10
        lg:w-[500px] lg:h-[400px] lg:-top-8
        pointer-events-none
      "
      >
        <img
          src="/images/hashis.png"
          alt="Hashi com sushi"
          className="w-full h-full object-contain transform -rotate-12"
        />
      </div>

      {/* Hashi direito */}
      <div
        ref={rightHashiRef}
        className="
        absolute -right-20 z-[500]
        w-[300px] h-[200px] top-[650px]
        sm:w-[350px] sm:h-[250px] sm:top-[670px]
        md:w-[400px] md:h-[300px] md:top-[700px]
        lg:w-[500px] lg:h-[400px] lg:top-[750px]
        pointer-events-none
      "
      >
        <img
          src="/images/hashis.png"
          alt="Hashi com sushi"
          className="w-full h-full object-contain transform rotate-12 scale-x-[-1]"
        />
      </div>

      <div className="container-padded relative z-10">
        <div className="japanese-divider">
          <span className="w-2 h-2 bg-nakai-red rotate-45"></span>
        </div>

        <div className="text-center mb-16">
          <h2 className="menu-heading heading-lg text-nakai-navy mb-4">
            Nossa Culinária Autêntica
          </h2>
          <p className="text-lg text-nakai-navy/80 max-w-2xl mx-auto gsap-reveal-item">
            Tradição e inovação se encontram em cada peça preparada por nossos
            mestres sushimen
          </p>
        </div>

        <div
          className="menu-container grid grid-cols-1 md:grid-cols-2 gap-8"
          ref={menuContainerRef}
        >
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item group">
              <div className="bg-white rounded-md overflow-hidden z-[700] shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-display font-semibold text-nakai-navy">
                      {item.name}
                    </h3>
                    <span className="text-nakai-red font-display text-xl font-semibold">
                      R$ {item.price}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-nakai-red/10 text-nakai-red mb-3">
                    {item.category === "sushi"
                      ? "Sushi"
                      : item.category === "sashimi"
                      ? "Sashimi"
                      : item.category === "rolls"
                      ? "Rolls Especiais"
                      : item.category === "hot"
                      ? "Pratos Quentes"
                      : "Sobremesas"}
                  </span>
                  <p className="text-nakai-navy/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 relative overflow-hidden py-24">
        <h3 className="text-3xl font-display font-bold text-white text-center mb-12 drop-shadow-lg relative z-20">
          Experiências Exclusivas Nakai
        </h3>

        <div
          ref={paintedBgRef}
          className="absolute inset-0 top-16 flex justify-center items-center z-10"
        >
          <div className="w-full h-full">
            <img
              src="/images/background.png"
              alt="Fundo pintado"
              className="w-full h-full object-cover object-center opacity-90"
            />
          </div>
        </div>

        <div className="container-padded relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="feature-card bg-white/95 backdrop-blur-sm border-none shadow-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-20 w-20 bg-nakai-red/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl font-display text-nakai-red">
                    極
                  </span>
                </div>
                <h4 className="text-xl font-display font-semibold mb-2">
                  Omakase
                </h4>
                <CardDescription className="text-nakai-navy/80">
                  Deixe nas mãos do chef a seleção das melhores peças do dia em
                  uma experiência gastronômica única
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="feature-card bg-white/95 backdrop-blur-sm border-none shadow-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-20 w-20 bg-nakai-red/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl font-display text-nakai-red">
                    节
                  </span>
                </div>
                <h4 className="text-xl font-display font-semibold mb-2">
                  Festival
                </h4>
                <CardDescription className="text-nakai-navy/80">
                  Vontade sem limites: viva uma experiência gastronômica
                  completa da autêntica culinária oriental com mais de 100
                  opções de pratos, sushis e sobremesas disponíveis.{" "}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="feature-card bg-white/95 backdrop-blur-sm border-none shadow-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-20 w-20 bg-nakai-red/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl font-display text-nakai-red">
                    问
                  </span>
                </div>
                <h4 className="text-xl font-display font-semibold mb-2">
                  À La Carte
                </h4>
                <CardDescription className="text-nakai-navy/80">
                  Cardápio À La Carte: delícias orientais preparadas com
                  maestria, uma viagem única de sabores autênticos do Oriente.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block border-2 border-nakai-red text-nakai-red py-2 px-6 hover:bg-nakai-red hover:text-white transition-colors"
        >
          Ver Cardápio Completo
        </a>
      </div>
    </section>
  );
};

export default Menu;
