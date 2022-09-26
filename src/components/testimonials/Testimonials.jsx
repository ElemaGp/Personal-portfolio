import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/felix.jpg'
import AVTR2 from '../../assets/samuel.jpg'
import AVTR3 from '../../assets/grace.jpeg'
import AVTR4 from '../../assets/collins.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
      avatar: AVTR1,
      name: "Felix",
      review: "Elema does such an amazing job!. Very professional and timely. I was wowed by how smooth and beautiful the finished website looked. I definitely recommend."
  },
  {
      avatar: AVTR2,
      name: "Samuel",
      review: "I totally love what I got. The website is stunning and I can tell Elema pays so much attention to detail. The website looks really sleek and works perfectly."
  },
  {
      avatar: AVTR3,
      name: "Grace",
      review: "Elema is my go-to guy for building and maintaining my website. He knows his onions and always delivers an awesome product. Very easy to work with too."
  },
  {
      avatar: AVTR4,
      name: "Collins",
      review: "Elema transformed my idea for a website into a real, working product. It's so beautiful and works great!"
  },
]




const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h1>Testimonials</h1>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
        {
           data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}  />
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
           </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}
        

export default Testimonials