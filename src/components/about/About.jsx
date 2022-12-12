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
            <small>Several Projects Completed using Reactjs, Javascript, Express, Nodejs, Mongoose Mongodb, axios, firebase, HTML, CSS, SASS, JWT, amongst other tools.  </small>
            </article>
          </div>

          <p>
            I am a front-end developer experienced in Javascript, ReactJS, SASS, CSS, Semantic-UI, Bootstrap, HTML, Styled Components amongst other tools. I am also experienced in consuming APIs. I have additional backend skills such as creation of APIs with JWT authentication system using NodeJS and Express. And database skills with MongoDB and Firebase. I am also experienced in using git and github for team collaboration and version control.
          </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About