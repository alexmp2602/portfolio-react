import React from 'react'
import Styles from './_header.scss'
import '../../_variables.scss';



export const Header = () => {
  return (
    <div>
        <header>
        <div className="header__logo">
          <p>
            <a href="#"> AP </a>
          </p>
        </div>
        <button id="boton-abrir-menu">
          <i id="abrir-menu" className="fa-solid fa-bars"></i>
        </button>
        <nav id="navbar-menu">
          <button id="cerrar-menu">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  )
}
