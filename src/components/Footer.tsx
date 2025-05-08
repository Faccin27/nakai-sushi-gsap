'use client'
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nakai-black text-white py-8">
      <div className="container-padded">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-display text-2xl mb-2">Nakai</h3>
            <p className="text-white/70">Autêntica culinária Japonesa</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 items-center">
            <a href="#about" className="hover:text-nakai-red transition-colors">Sobre</a>
            <a href="#menu" className="hover:text-nakai-red transition-colors">Menu</a>
            <a href="#reviews" className="hover:text-nakai-red transition-colors">Avaliações</a>
            <a href="#contact" className="hover:text-nakai-red transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="h-px bg-white/20 my-6"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Nakai Sushi. Todos os direitos reservados.</p>

          <p>© {new Date().getFullYear()} Desenvolvido por <a href='https://faccindev.pro' target='_blank' className='text-nakai-red hover:text-nakai-red/80'>FaccinDev</a></p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="mx-2 hover:text-white">Política de Privacidade</a>
            <a href="#" className="mx-2 hover:text-white">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
