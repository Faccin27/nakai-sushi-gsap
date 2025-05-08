'use client'
import { useEffect } from "react";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import { initializeGSAP } from '@/lib/gsap';

const Index = () => {
  useEffect(() => {
    // initialize gsap animation
    initializeGSAP();
    // Smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (targetId !== '#') {
          const targetElement = document.querySelector(targetId as string);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-nakai-navy">
    <Navbar />
    <Hero />
    <About />
    <Menu />
    <Reviews />
  </div>
  );
}
