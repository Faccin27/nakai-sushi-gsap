"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0  transition-all duration-300 py-3 z-[1000]",
        scrolled ? "bg-nakai-navy/95 shadow-lg backdrop-blur-sm py-2" : "bg-transparent",
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

        <button
          className="md:hidden text-white relative z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-center items-center w-6 h-6">
            <span
              className={cn(
                "w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out",
                mobileMenuOpen ? "transform rotate-45 translate-y-1.5" : "mb-1.5",
              )}
            ></span>
            <span
              className={cn(
                "w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out",
                mobileMenuOpen ? "opacity-0" : "mb-1.5",
              )}
            ></span>
            <span
              className={cn(
                "w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out",
                mobileMenuOpen ? "transform -rotate-45 -translate-y-1.5" : "",
              )}
            ></span>
          </div>
        </button>
      </div>
      <div
        className={cn(
          "fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden transition-all duration-500 ease-in-out",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute right-0 top-0 h-screen w-4/5 max-w-sm bg-gradient-to-b from-nakai-navy to-black p-6 shadow-2xl transition-all duration-500 ease-in-out transform",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-col space-y-8 mt-20 items-center">
            <a
              href="#about"
              className="text-white text-xl font-medium hover:text-nakai-red transition-colors duration-300 w-full text-center py-3 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#menu"
              className="text-white text-xl font-medium hover:text-nakai-red transition-colors duration-300 w-full text-center py-3 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="#reviews"
              className="text-white text-xl font-medium hover:text-nakai-red transition-colors duration-300 w-full text-center py-3 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Avaliações
            </a>
            <a
              href="#contact"
              className="text-white text-xl font-medium hover:text-nakai-red transition-colors duration-300 w-full text-center py-3 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>

            <div className="mt-8 w-full">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-nakai-red/20 flex items-center justify-center">
                  <span className="text-nakai-red font-display text-2xl">中</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
