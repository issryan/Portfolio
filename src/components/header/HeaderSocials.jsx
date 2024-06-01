/**
 * Student's Name: Ryan Arafeh
 * StudentID: 301239052
 * Date: May 31st 2024
 */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './header.css'

const HeaderSocials = () => {
  return (
    
      <>
        <a href="https://www.linkedin.com/in/ryanarafeh" className='header-icon' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/issryan" className='header-icon'target="_blank" rel='noreferrer'><BsGithub/></a>
      </>
  )
}

export default HeaderSocials