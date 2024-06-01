/**
 * Student's Name: Ryan Arafeh
 * StudentID: 301239052
 * Date: May 31st 2024
 */
import React from 'react'
import CV from '../../assets/arafehryan_resume.pdf'
import './header.css'

const CTA = () => {

  return (
    <>
      <div className="btn-container">
        <a href={CV} download className='btn btn-color-2'>Download My Resume</a>
        <a href="#contacts" className='btn btn-color-1'>Contact Me</a>
      </div>
    </>
  )
}
export default CTA