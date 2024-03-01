import React, { useState, useEffect } from "react";
import "../../_variables.scss";
import "./_header.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home"); // Estado para almacenar la sección activa
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 48;

      // Determinar la sección activa
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const servicesSection = document.getElementById("services");
      const portfolioSection = document.getElementById("portfolio");
      const contactSection = document.getElementById("contact");

      if (
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setActiveSection("home");
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < servicesSection.offsetTop
      ) {
        setActiveSection("about");
      } else if (
        scrollPosition >= servicesSection.offsetTop &&
        scrollPosition < portfolioSection.offsetTop
      ) {
        setActiveSection("services");
      } else if (
        scrollPosition >= portfolioSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setActiveSection("portfolio");
      } else if (scrollPosition >= contactSection.offsetTop) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Realiza la comprobación inicial al cargar el componente
    handleScroll();

    // Limpia los event listeners al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <header id="header">
        <div className="header__logo">
          <p>
            <button className="link-style-button">AP</button>
          </p>
        </div>
        <button id="boton-abrir-menu" onClick={toggleMenu}>
          <AiOutlineMenu id="abrir-menu" />
        </button>
        <nav id="navbar-menu" className={isMenuOpen ? "open" : ""}>
          <button id="cerrar-menu" onClick={toggleMenu}>
            <AiOutlineClose className="boton-cerrar-menu" />
          </button>
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};
