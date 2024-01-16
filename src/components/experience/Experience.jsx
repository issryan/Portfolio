import React, {useState} from 'react';
import './experience.css';

const Experience = () => {
   const [toggleState, setToggleState] = useState(1);
   const toggleTab = (index) => {
    setToggleState(index);
   };
   
  return (
    <section id='experience'>
      <h2 className='section__title'>Qualifications</h2>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className={toggleState === 1 ? "qualification__button qualification_active button--flex" : "qualification__button qualification_active button--flex"
        }
        onClick={() => toggleTab(1)}
        >


            <i className='uil uil-graduation-cap qualification__icon'>
            </i> Skillset
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification_active button--flex" : "qualification__button qualification_active button--flex"}
          onClick={() => toggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification__icon'>
            </i> Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : "qualification__content"}>
            







          </div>

          <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : "qualification__content"}>
          <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Senior Customer Experience Associate</h3>
                <span className='qualification__subtitle'>Scotiabank - Toronto, Canada</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Customer Experience Associate</h3>
                <span className='qualification__subtitle'>Scotiabank - Toronto, Canada</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>2022 - 2023
                </div>
              </div>

            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience