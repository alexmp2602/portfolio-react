import React from 'react'
import { BiMailSend } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";

export const Contact = () => {
  return (
    <div>
        <section id="contact">
        <h2>Contact</h2>
        <h3>Contact me if you want us to work together.</h3>
        <div className="contact__grid">

          <a
            href="mailto:Lexthus@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact__mail reveal" data-aos="fade-up">
            <BiMailSend className='bi-mail'/>
              <p>Mail Me</p>
            </div>
          </a>

          <a
            href="https://github.com/Lexthus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact__github reveal" data-aos="fade-up">
            <BiLogoGithub className='bi-github'/>
              <p>Follow Me</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/alex-pereyra-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact__linked-in reveal" data-aos="fade-up">
              <BiLogoLinkedinSquare className="bi-linkedin-in"/>
              <p>Contact Me</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/__alexpereyra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact__instagram reveal" data-aos="fade-up">
              <BiLogoInstagram className='bi-instagram'/>
              <p>Follow Me</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
