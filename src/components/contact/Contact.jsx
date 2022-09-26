import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  /*Integerating the form with the emailjs service. I think the reason useRef is used on the form is so that it doesn't render on each user input, and so that we have access to the "form.current" which is the current form a user wants to send */
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i4jc80n', 'template_v222ln8', form.current, 'UHHn2XFGfofTydRnZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>elemagodspower@gmail.com</h5>
            <a href="mailto:elemagodspower@gmail.com" target="_blank">Send a message</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+2347011733379</h5>
            <a href="https://api.whatsapp.com/send?phone=+2347011733379" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact