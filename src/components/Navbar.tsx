'use client'
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0  transition-all duration-300 py-3 z-[1000]",
        scrolled
          ? "bg-nakai-navy/95 shadow-lg backdrop-blur-sm py-2"
          : "bg-transparent"
      )}
    >
      <div className="container-padded flex items-center justify-between">
        <a href="#" className="text-white font-display text-2xl">
          Nakai
        </a>

        <div className="hidden md:flex space-x-8 text-white">
          <a href="#about" className="hover:text-nakai-red transition-colors">
            Sobre
          </a>
          <a href="#menu" className="hover:text-nakai-red transition-colors">
            Menu
          </a>
          <a href="#reviews" className="hover:text-nakai-red transition-colors">
            Avaliações
          </a>
          <a href="#contact" className="hover:text-nakai-red transition-colors">
            Contato
          </a>
        </div>

        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
