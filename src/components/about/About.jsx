import React from "react";
import { BiDownload } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoSass } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoBootstrap } from "react-icons/bi";

export const About = () => {
  return (
    <div>
      <section id="about">
        <h2>About me</h2>
        <div className="about__grid">
          <div className="about__description reveal" data-aos="fade-up">
            <h2>Front End Developer.</h2>
            <p>
              I am a Front End developer with experience in building websites. I
              specialize in JavaScript.
            </p>
            <p>
              I constantly strive to enhance my skills and continue growing
              professionally to make valuable contributions to the work group I
              am a part of.
            </p>
            <a
              href="assets/Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i><BiDownload margin-right="10px"/> Download CV</i>
            </a>
          </div>
          <div className="about__skills reveal" data-aos="fade-up">
            <div className="skill__title">
              <h2>My skills</h2>
            </div>
            <div className="skill__item reveal" data-aos="fade-up">
              <BiLogoJavascript color="#f0db4f" />
              <div className="skill__name">JavaScript</div>
            </div>
            <div className="skill__item reveal" data-aos="fade-up">
              <BiLogoNodejs color="#68a063" />
              <div className="skill__name">Node.js</div>
            </div>
            <div className="skill__item reveal" data-aos="fade-up">
              <BiLogoReact color=" #61dbfb" />
              <div className="skill__name">React</div>
            </div>
            <div className="skill__item reveal" data-aos="fade-up">
              <BiLogoSass color="#cd6799" />
              <div className="skill__name">Sass</div>
            </div>
            <div className="skill__item reveal" data-aos="fade-up">
              <BiLogoGit color="#f1502f" />
              <div className="skill__name">Git</div>
            </div>
            <div className="skill__item reveal" data-aos="fade-up">
              <BiLogoBootstrap color="#602c50" />
              <div className="skill__name">Bootstrap</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
