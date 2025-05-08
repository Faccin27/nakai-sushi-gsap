"use client"

import type React from "react"
import { useEffect } from "react"
import { revealElements } from "@/lib/gsap"

const Contact: React.FC = () => {
  useEffect(() => {
    revealElements(".contact-reveal")
  }, [])

  return (
    <section id="contact" className="section bg-nakai-navy text-white">
      <div className="container-padded">
        <div className="japanese-divider">
          <span className="w-2 h-2 bg-nakai-red rotate-45"></span>
        </div>

        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 gsap-reveal-item">Encontre-nos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="contact-reveal">
            <h3 className="text-xl font-display mb-6 text-nakai-red">Horário & Localização</h3>
            <div className="mb-6">
              <h4 className="font-medium mb-2">Endereço</h4>
              <p>Rua das Flores, 123</p>
              <p>São Paulo, SP 01234-000</p>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-2">Horário</h4>
              <p>Segunda - Quinta: 17h - 22h</p>
              <p>Sexta - Sábado: 17h - 23h</p>
              <p>Domingo: Fechado</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Contato</h4>
              <p>reservas@nakaisushi.com</p>
              <p>(11) 9876-5432</p>
            </div>
          </div>

          <div className="h-80 md:h-auto contact-reveal">
            <div className="bg-white h-full w-full rounded-sm overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975588025283!2d-46.65739492378867!3d-23.56340066133694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1715187574000!5m2!1spt-BR!2sbr&iwloc=none&disableDefaultUI=1&maptype=roadmap"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Nakai Sushi"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 contact-reveal flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-block bg-nakai-red text-white py-3 px-8 rounded-sm hover:bg-opacity-90 transition-colors"
          >
            Faça uma Reserva
          </a>
          <a
            href="https://maps.app.goo.gl/nakai-sushi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-white text-white py-3 px-8 rounded-sm hover:bg-white hover:text-nakai-navy transition-colors"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

