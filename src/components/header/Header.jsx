import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.jpeg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Elema Godspower</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src="https://drive.google.com/uc?export=view&id=1SaZp9C8oJSiyh9aJB6I90D1ggMl9CICv" alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header