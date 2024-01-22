import React from 'react'
import './about.css'
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
              <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About