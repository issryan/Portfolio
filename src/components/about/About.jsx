import React from 'react'
import './about.css'
import ImageCarousel from './carousel';
import myImage from '../../assets/avatar.png'
import educationIcon from '../../assets/education.png'
import GPAIcon from '../../assets/grade.png'
import hobbiesIcon from '../../assets/hobbies.png'


const About = () => {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src={myImage}
            alt="Profile"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={educationIcon}
                alt="Experience icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>Software Engineering Technology <br />@Centennial College</p>
            </div>
            <div class="details-container">
              <img
                src={GPAIcon}
                alt="Education icon"
                class="icon"
              />
              <h3>GPA</h3>
              <p>3.5</p>
            </div>
            <div class="details-container">
              <img
                src={hobbiesIcon}
                alt="Education icon"
                class="icon"
              />
              <h3>Hobbies</h3>
              <p>Video Editing<br />Photography</p>
            </div>
          </div>
          <div class="text-container">
            <p>
              Hey, I'm Ryan Arafeh, a Software Engineering student navigating the coding maze. Currently knee-deep in algorithms and projects, I'm on a mission to make tech as cool as it can get. When I'm not wrestling with code, you'll catch me snapping pics of my daily adventures. From the hustle of the city to the chill vibes of nature, my camera's always ready. Right now, I'm gearing up to dive into the world of either data analysis or web development. Currently on the lookout for an internship, so if you've got exciting projects and a spot on your team, I'm all ears. Let's connect and explore the exciting intersections of code and creativity!
            </p>
          </div>
          <div class="carousel-container">

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
