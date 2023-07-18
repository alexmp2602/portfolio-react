import React, { useState, useEffect } from 'react';
import '../../_variables.scss';
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home'); // Estado para almacenar la sección activa
  const [headerHeight, setHeaderHeight] = useState(0); // Estado para almacenar la altura del encabezado

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 48;

      // Determinar la sección activa
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const portfolioSection = document.getElementById('portfolio');
      const contactSection = document.getElementById('contact');

      if (
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setActiveSection('home');
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < servicesSection.offsetTop
      ) {
        setActiveSection('about');
      } else if (
        scrollPosition >= servicesSection.offsetTop &&
        scrollPosition < portfolioSection.offsetTop
      ) {
        setActiveSection('services');
      } else if (
        scrollPosition >= portfolioSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setActiveSection('portfolio');
      } else if (scrollPosition >= contactSection.offsetTop) {
        setActiveSection('contact');
      }
    };

    const handleResize = () => {
      // Recalcular la altura del encabezado al cambiar el tamaño de la ventana
      setHeaderHeight(document.getElementById('header').offsetHeight);
    };

    // Obtener la altura del encabezado al cargar el componente
    setHeaderHeight(document.getElementById('header').offsetHeight);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Realiza la comprobación inicial al cargar el componente
    handleScroll();

    // Limpia los event listeners al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <header id="header">
        <div className="header__logo">
          <p>
            <a href="#">AP</a>
          </p>
        </div>
        <button id="boton-abrir-menu">
          <AiOutlineMenu id="abrir-menu" className="fa-solid fa-bars" />
        </button>
        <nav id="navbar-menu">
          <button id="cerrar-menu">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a
            href="#services"
            className={activeSection === 'services' ? 'active' : ''}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={activeSection === 'portfolio' ? 'active' : ''}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};
