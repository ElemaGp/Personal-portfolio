import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpeg'
// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://drive.google.com/uc?export=view&id=19VMcNxhtCq_yRUd4fzq-1IEIh6JLr_AY" alt= "About" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>Several Projects Completed using Reactjs, Javascript, Express, Nodejs, Mongoose Mongodb, axios, firebase, HTML, CSS and SASS and JWT authentication.  </small>
            </article>
          </div>

          <p>
            I'm a full-stack developer experienced in front-end development, back-end development including creating APIs. Fetching data through API endpoints, and working with databases. I'm also experienced with git and github for team collaborations and version control.
          </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About