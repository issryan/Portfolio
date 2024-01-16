import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/avatar.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
    <section id='profile'>
      <div class='section__pic-container'>
        <img src={me} alt="Ryan Arafeh profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text_p1">Hello, I'm</p>
        <h1 class="title">Ryan Arafeh </h1>
        <p class="section__text__p2">Software Engineering Student</p>
        <div class="btn-container">   
          <CTA/>
        </div>
        <div id="socials-container">
          <HeaderSocials />
        </div>
      </div>
    </section>
    </header>
  )
}

export default Header