import React from 'react'
import CV from '../../assets/arafehryan_resume.pdf'

const CTA = () => {

  return (
    <>
      <a href={CV} download className='btn'>Download My Resume</a>
      <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </>
  )
}
export default CTA