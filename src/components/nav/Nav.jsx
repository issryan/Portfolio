import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { GoChecklist } from 'react-icons/go'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { MdWork } from 'react-icons/md';
import { useState } from 'react'
import logo from '../../assets/logo.png';




const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (

    <nav>

      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaLaptopCode /></a>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdWork /></a>
      <a href="#projects" onClick={() => setActiveNav('#myprojects')} className={activeNav === '#myprojects' ? 'active' : ''}><GoChecklist /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Nav