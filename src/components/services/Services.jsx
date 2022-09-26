import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container services__container">
        
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
           <li>
              <BiCheck className='service__list-icon' />
              <p>Building beautiful, responsive and functional websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creation of APIs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Accessing and interacting with databases through APIs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creation of authentication systems for protected routes and pages.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Database setup and management.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        
      </div>
    </section>
  )
}

export default Services

            
          