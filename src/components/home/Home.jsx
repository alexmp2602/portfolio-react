import React from "react";

export const Home = () => {
  return (
    <div>
      <section id="home" className="home">
        <div className="home__background"></div>
        <picture>
          <img
            src="assets/img/Profile/profile.webp"
            alt="picture profile"
            className="reveal"
            data-aos="fade-up"
          />
        </picture>
        <div className="home__description reveal" data-aos="fade-up">
          <h1>
            <a href="#about">Alex Pereyra</a>
          </h1>
          <span>Front End Developer</span>
        </div>
      </section>
    </div>
  );
};
