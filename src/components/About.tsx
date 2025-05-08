'use client'
import React, { useEffect } from 'react';
import { textReveal, revealElements } from '@/lib/gsap';

const About: React.FC = () => {
  useEffect(() => {
    // Initialize animations
    textReveal('.about-title');
    revealElements('.about-text');
    revealElements('.about-image');
  }, []);

  return (
    <section id="about" className="section bg-nakai-navy text-white">
      <div className="container-padded">
        <div className="japanese-divider">
          <span className="w-2 h-2 bg-nakai-red rotate-45"></span>
        </div>
        
        <h2 className="heading-lg text-center mb-16 about-title">
          A História Nakai
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6 about-text">
              Fundado em 2010 pelo Chef Mestre Hiroshi Nakai, nosso restaurante traz os sabores autênticos de Tóquio para sua mesa. O Chef Nakai treinou por mais de quinze anos nas mais prestigiadas cozinhas de sushi do Japão antes de trazer sua arte para o exterior.
            </p>
            <p className="text-lg mb-6 about-text">
              No Nakai, honramos as tradições da culinária japonesa enquanto abraçamos técnicas inovadoras. Nossos ingredientes são obtidos diariamente de pescadores locais e parceiros confiáveis no Japão para garantir a mais alta qualidade e frescor.
            </p>
            <p className="text-lg about-text">
              Cada prato conta uma história, cada sabor tem um propósito. Esta é a filosofia Nakai que nos guia na criação de experiências gastronômicas inesquecíveis para nossos clientes.
            </p>
          </div>
          
          <div className="order-1 md:order-2 about-image">
            <div className="relative">
              <img 
                src="/images/about.jpg" 
                alt="Chef preparando sushi" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-nakai-red z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
