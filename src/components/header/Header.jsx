import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/avatar.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
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
            <CTA/>
          </div>
          <div id="socials-container">
            <HeaderSocials/>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header