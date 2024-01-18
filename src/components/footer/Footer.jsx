import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>RYAN ARAFEH</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
        </ul>

        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ryanarafeh" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/issryan" target="_blank" rel='noreferrer'><BsGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>Copyright &#169; 2024 Ryan Arafeh. All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer