import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/g-i-elema-4617b0247/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ElemaGp" target="_blank"><FaGithub/></a>
        <a href="http://twitter.com/ikechhi" target="_blank"><BsTwitter/></a>

    </div>
  )
}

export default HeaderSocials