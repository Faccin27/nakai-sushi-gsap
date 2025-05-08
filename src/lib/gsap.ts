// abstract;
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP on page load
export const initializeGSAP = () => {
  // Set default ease for all animations
  gsap.defaults({
    ease: "power2.inOut",
    duration: 1
  });

  // Inicializa as classes necessárias para evitar problemas de visibilidade
  gsap.set('.gsap-reveal-item', { visibility: 'visible' });
  gsap.set('.about-text', { visibility: 'visible' });
  gsap.set('.about-image', { visibility: 'visible' });
  gsap.set('.about-title', { visibility: 'visible' });
  gsap.set('.menu-item', { visibility: 'visible' });
  gsap.set('.review-card', { visibility: 'visible' });
  gsap.set('.contact-reveal', { visibility: 'visible' });
  gsap.set('.feature-card', { visibility: 'visible' });
};

// Helper to reveal elements when scrolled into view
export const revealElements = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element) => {
    // Definir inicialmente os elementos como visíveis para evitar problemas
    gsap.set(element, { visibility: 'visible' });
    
    gsap.fromTo(
      element, 
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
  });
};

export const staggerReveal = (parentSelector: string, childSelector: string, staggerTime = 0.2) => {
  const containers = document.querySelectorAll(parentSelector);
  
  containers.forEach(container => {
    const elements = container.querySelectorAll(childSelector);
    
    // Definir inicialmente os elementos como visíveis para evitar problemas
    gsap.set(elements, { visibility: 'visible' });
    
    gsap.fromTo(
      elements,
      { 
        y: 30, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        stagger: staggerTime,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=150",
          toggleActions: "play none none none"
        }
      }
    );
  });
};

// Parallax effect for background images
export const createParallax = (selector: string, speed = 0.5) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    gsap.to(element, {
      y: () => speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
};

// Text reveal animation for headings
export const textReveal = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    // Definir inicialmente os elementos como visíveis para evitar problemas
    gsap.set(element, { visibility: 'visible' });
    
    gsap.fromTo(
      element,
      { 
        y: 80, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );
  });
};

