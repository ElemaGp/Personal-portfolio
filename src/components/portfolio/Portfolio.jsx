import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/netflix-clone.png'
// import IMG2 from '../../assets/Sports-blog.png'
// import IMG3 from '../../assets/1-Liner.png'
// import IMG4 from '../../assets/meal-recipies.png'
// import IMG5 from '../../assets/personal-blog.png'
// import IMG6 from '../../assets/stories-blog.png'
// import IMG7 from '../../assets/Ecommerce.png'

const data = [
  {
      id: 1,
      image: "https://drive.google.com/uc?export=view&id=1-jaHrm0HmZsLQdlTYFZJtEuwZ3nuTIyg",
      title: 'Netflix clone',
      github: 'https://github.com/ElemaGp/netflix-clone-MERN-stack.git',

  },
  {
      id: 2,
      image: "https://drive.google.com/uc?export=view&id=10EP1j0IiICE48abar7eze9H8zhHDSKOk",
      title: 'Sports Blog',
      github: 'https://github.com/ElemaGp/Sports-blog-MERN-Stack.git',
      
  },
  {
      id: 3,
      image: "https://drive.google.com/uc?export=view&id=1FDKvUqHedj2EzomDQSHI7VKLlbW_dg-J",
      title: 'Clever 1-Liners Journal',
      github: 'https://github.com/ElemaGp/1-Liner-Journal.git',
    
  },
  {
      id: 4,
      image: "https://drive.google.com/uc?export=view&id=1WO9KF1DSaNosRr410oXnwoyAAT__vn6h",
      title: 'Meal Recipies',
      github: 'https://github.com/ElemaGp/Meal-Recipies.git',
   
  },
  {
      id: 5,
      image: "https://drive.google.com/uc?export=view&id=1z9TUs4eXGPeh_hWKVUBN-v8O1prfLzR_",
      title: 'Personal blog',
      github: 'https://github.com/ElemaGp/nodejs-blog.git',
  },
  {
      id: 6,
      image: "https://drive.google.com/uc?export=view&id=13Qxk5HMdfn4oLvwy5lfRyJ-n9YoTdbl_",
      title: 'Stories blog',
      github: 'https://github.com/ElemaGp/story-blog.git',

  },
  {
      id: 7,
      image: "https://drive.google.com/uc?export=view&id=1GEWg4PSciEgE45SDhFp7E_cXJGzyS1o0",
      title: 'E-commerce store',
      github: 'https://github.com/ElemaGp/E-commerce-PROJECT-react-redux.git',

  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} className="portfolio__img"/>
              </div>
              <h3 className="portfolio__title"> {title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='blank'>Github</a>
              </div>
            </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
        