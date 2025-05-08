'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const parallaxElement = parallaxRef.current;
    const contentElement = contentRef.current;
    
    if (parallaxElement && contentElement) {
      // Parallax effect for the background
      gsap.fromTo(
        parallaxElement,
        { y: 0 },
        {
          y: 300,
          ease: "none",
          scrollTrigger: {
            trigger: parallaxElement.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );
      
      // Animate hero content
      const tl = gsap.timeline();
      tl.fromTo(
        contentElement.querySelector('h1'),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      ).fromTo(
        contentElement.querySelector('p'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      ).fromTo(
        contentElement.querySelector('a'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '120%', // Taller than container for parallax effect
          top: '-10%'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-nakai-black/80 via-nakai-navy/70 to-nakai-black/90" />
      </div>
      
      {/* Hero Content */}
      <div 
        ref={contentRef}
        className="relative z-10 h-full flex items-center justify-center text-center"
      >
        <div className="container px-4 pt-20">
          <h1 className="heading-xl text-white mb-4">
            <span className="block mb-2 text-nakai-red">Nakai</span>
            Uma Jornada pelos Sabores Japoneses
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            Experimente a arte da culinária japonesa autêntica em uma atmosfera de elegância refinada
          </p>
          <a 
            href="#menu" 
            className="inline-block bg-nakai-red text-white py-3 px-8 rounded-sm hover:bg-opacity-90 transition-colors"
          >
            Explorar Cardápio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
