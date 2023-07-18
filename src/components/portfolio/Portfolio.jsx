import React from 'react'
import { TbWorldUp } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";

export const Portfolio = () => {
  return (
    <div>
        <section id="portfolio">
        <h2>Portfolio</h2>
        <h3>Here you can see the projects I have worked on.</h3>
        <div className="portfolio__grid">
          <div className="portfolio__item reveal" data-aos="fade-up">
            <picture>
              <source type="image/jpeg" srcSet="assets/proyects/iabot.webp" />
              <img className="portfolio__img" alt="portfolio item" />
            </picture>
            <div className="portfolio__description">
              <h3>IA-BOT</h3>
              <p>Web Application: JS, Sass</p>
              <div className="portfolio__buttons">
                <a
                  href="https://iabot.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorldUp className='tb-world'/> Website
                </a>
                <a
                  href="https://github.com/Lexthus/IA-BOT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandGithub className='tb-github'/> Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
