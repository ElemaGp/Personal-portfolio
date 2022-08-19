import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
      avatar: AVTR1,
      name: "Tina Snow",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima debitis ab deleniti saepe ipsum suscipit ipsam commodi nulla natus. Aut ab libero fugit voluptatum quaerat officia ullam. Id, suscipit!"
  },
  {
      avatar: AVTR2,
      name: "Harvey Specter",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat, consectetur deleniti enim, dignissimos mollitia distinctio provident illo laborum quis molestiae cumque voluptatem. Minus commodi officiis earum quod quidem. Fuga?"
  },
  {
      avatar: AVTR3,
      name: "Steve Harvey",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis, magni explicabo deserunt ab placeat magnam. Non explicabo dignissimos cupiditate sunt perspiciatis officia, asperiores neque pariatur itaque ea, impedit repellendus?"
  },
  {
      avatar: AVTR4,
      name: "John Terry",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam maxime doloribus ipsum cum omnis totam, assumenda explicabo! Rerum iure veritatis quo illo? Unde omnis fuga repudiandae hic atque tempore eligendi aperiam modi, voluptas quas repellendus pariatur, dolores est eius exercitationem."
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