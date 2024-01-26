import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/alphard_survey.png'
import IMG3 from '../../assets/shift_logo.png'


const Myprojects = () => {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={IMG1}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Portfolio</h2>
            <div class="btn-container">
              <a href="https://github.com/issryan/Portfolio" className='btn btn-color-2' target="_blank" rel='noreferrer'>Github</a>
              <a href="https://ryanarafeh.netlify.app/" className='btn btn-color-1'target="_blank" rel='noreferrer'>Live Demo</a>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={IMG2}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Alphard Survey</h2>
            <div class="btn-container">
              <a href="https://github.com/Alphard-Survey/Alphard-Survey-Base-Model" className='btn btn-color-2' target="_blank" rel='noreferrer'>Github</a>
              <a href="https://ryanarafeh.netlify.app/"className='btn btn-color-1' target="_blank" rel='noreferrer'>Live Demo</a>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={IMG3}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Shift Happens</h2>
            <div class="btn-container">
            <a href="https://github.com/issryan/ShiftHappens" className='btn btn-color-2' target="_blank" rel='noreferrer'>Github</a>
              <a href="https://ryanarafeh.netlify.app/" className='btn btn-color-1' target="_blank" rel='noreferrer'>In Progress...</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Myprojects
