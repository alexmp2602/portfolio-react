import React from "react";
import { BiMobileAlt } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";

export const Services = () => {
  return (
    <div>
      <section id="services">
        <h2>Services</h2>
        <h3>Services I offer to my clients</h3>
        <div className="services__grid">
          <div className="services__item reveal" data-aos="fade-up">
            <BiMobileAlt className="bi-mobile"/>
            <h3>Fully Responsive</h3>
            <p>
              Your site will display properly on any device, including desktop
              computers, tablets and mobile phones.
            </p>
          </div>
          <div className="services__item reveal" data-aos="fade-up">
            <BiPencil className="bi-pencil"/>
            <h3>Creative Design</h3>
            <p>
              A good and attractive web design helps you keep your leads on your
              site, which is the digital face of your business.
            </p>
          </div>
          <div className="services__item reveal" data-aos="fade-up">
          <BiCodeAlt className="bi-code"/>
            <h3>Development</h3>
            <p>
              I know the importance of web design and can help you create a
              website you’ll love.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
