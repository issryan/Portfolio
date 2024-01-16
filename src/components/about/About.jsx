import React from 'react'
import './about.css'
import myImage from '../../assets/avatar.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Advanced Diploma in Software Engineering Tehcnology<br /><i>@Centennial College</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>3.5</small>
              </article>

              <article className='about__card'>
                  <h5>My Hobbies</h5>
                  <small>
                    <ul>
                      <li>Photography</li>
                      <li>Video Editing</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    about me paragraph here!!
            </p>

          </div>
      </div>
    </section>
  )
}

export default About