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
              Hello, I'm Ryan Arafeh, a dedicated student in the realm of Software Engineering Technology, driven by the passion to evolve into a future web developer and front-end specialist. Currently immersed in the dynamic world of coding and technology, I am honing my skills to create seamless and visually appealing digital experiences. My journey is fueled by a deep curiosity for the intersection of creativity and technology, with a keen interest in crafting user-friendly interfaces.
              <br/><br/>
              Outside the world of coding, I find joy in capturing moments through photography and expressing my creativity through video editing. Check out my photos below, where I showcase glimpses of the world through my lens. As I navigate the exciting landscape of software engineering, I am eager to contribute innovative solutions to the ever-evolving web development space. Join me on this exhilarating journey as I strive to make a meaningful impact in the digital realm.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About