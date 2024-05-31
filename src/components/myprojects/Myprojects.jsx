import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/alphard_survey.png'
import IMG3 from '../../assets/shift_logo.png'
import IMG4 from '../../assets/breedfinder.png'



const Myprojects = () => {
  
  //alerts for when user clicks live demo buttons
  function shiftAlert() {
    alert('IN PROGRESS');
  }

  function portfolioAlert() {
    alert("You're already here silly!");
  }

  return (
    <section id="projects" className="my-projects-section">
    <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
        <div className="details-container color-container">
            <div className="article-container">
              <img
                src={IMG3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Shift Happens</h2>
            <div class="btn-container">
            <a href="https://github.com/issryan/ShiftHappens" className='btn btn-color-2' target="_blank" rel='noreferrer'>Github</a>
            <button onClick={shiftAlert} className='btn btn-color-1' target="_blank" rel='noreferrer'>In Progress...</button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={IMG4}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Breed Finder</h2>
            <div className="btn-container">
              <a href="https://github.com/issryan/BreedFinder" className='btn btn-color-2' target="_blank" rel='noreferrer'>Github</a>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={IMG1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Portfolio</h2>
            <div className="btn-container">
              <a href="https://github.com/issryan/Portfolio" className='btn btn-color-2' target="_blank" rel='noreferrer'>Github</a>
              <button onClick={portfolioAlert} className='btn btn-color-1' target="_blank" rel='noreferrer'>Live Demo</button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={IMG2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Alphard Survey</h2>
            <div className="btn-container">
              <a href="https://github.com/Alphard-Survey/Alphard-Survey-Base-Model" className='btn btn-color-2' target="_blank" rel='noreferrer'>Github</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Myprojects
