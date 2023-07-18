import React from 'react'

export const Portfolio = () => {
  return (
    <div>
        <section id="portfolio">
        <h2>Portfolio</h2>
        <h3>Here you can see the projects I have worked on.</h3>
        <div className="portfolio__grid">
          <div className="portfolio__item reveal" data-aos="fade-up">
            <picture>
              <source type="image/jpeg" srcset="assets/proyects/iabot.webp" />
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
                  <i className="fas fa-globe-americas"></i> Website
                </a>
                <a
                  href="https://github.com/Lexthus/IA-BOT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
