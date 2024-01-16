import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/alphard_survey.png'
import IMG3 from '../../assets/shift_logo.png'


const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h2>My Projects</h2>

      <div className="container portfolio__container">

      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>My Portfolio</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Alphard Survey</h3>
            <small className='text-light'>EJS | Javascript | CSS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Alphard-Survey/Alphard-Survey-Base-Model" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Shift Happens</h3>
            <small className='text-light'>MongoDB | Express.js | React | Node.js</small>
            <div className="portfolio__item-cta">
              <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="" target="_blank" rel='noreferrer' className='btn btn-primary'>In Progress...</a>  
            </div>
            
        </article>
        
      </div>
    </section>
  )
}

export default Myprojects