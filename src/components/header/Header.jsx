import React from 'react';
import CTA from './CTA';
import me from '../../assets/avatar.png';
import HeaderSocials from './HeaderSocials';
import './header.css';
import { FaArrowDown } from 'react-icons/fa'; // Import arrow icon

const Header = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id='home'>
      <section id="profile">
        <div className="section__pic-container">
          <img src={me} alt="Avatar" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Ryan Arafeh</h1>
          <p className="section__text__p2">Software Engineer!</p>
          <div className="btn-container">
            <CTA />
          </div>
          <div id="socials-container">
            <HeaderSocials />
          </div>
        </div>
      </section>
      <div className="arrow-container" onClick={scrollToAbout}>
        <FaArrowDown className="scroll-arrow" />
      </div>
    </header>
  );
};

export default Header;